from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime 


app = FastAPI()

# Add CORS middleware at the very beginning
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Temporarily allow all origins for testing
    allow_credentials=False,  # Set to False when allow_origins=["*"]
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URL)
db = client.toolify_db

class ToolSubmission(BaseModel):
    name: str
    website_url: str
    amount_paid: float

@app.post("/submit")
async def submit_tool(submission: ToolSubmission):
    try:
        # Add timestamp to the submission
        submission_dict = submission.dict()
        submission_dict["created_at"] = datetime.utcnow()
        
        # Insert into MongoDB
        result = await db.submissions.insert_one(submission_dict)
        
        return {
            "status": "success",
            "message": "Tool submitted successfully",
            "submission_id": str(result.inserted_id)
        }
            
    except Exception as e:
        print(f"Error submitting tool: {str(e)}")  # Add logging
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to save submission: {str(e)}"
        ) 
    


# Test endpoint
@app.get("/")
async def root():
    return {"message": "API is running"}