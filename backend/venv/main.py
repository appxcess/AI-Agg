from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from bson import ObjectId
from datetime import datetime

app = FastAPI()

# ✅ Configure CORS correctly
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# ✅ MongoDB Connection
MONGO_URL = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URL)
db = client.toolify_db

# ✅ Define Pydantic model for tool submission
class ToolSubmission(BaseModel):
    name: str
    website_url: str
    amount_paid: float

# ✅ Define Pydantic model for tools, with ObjectId handling
class Tool(BaseModel):
    name: str
    website_url: str
    amount_paid: float
    created_at: datetime
    _id: str  # Convert ObjectId to string

    class Config:
        # This converts ObjectId to string when serializing
        json_encoders = {
            ObjectId: str
        }

# ✅ POST route to submit a tool
@app.post("/submit")
async def submit_tool(submission: ToolSubmission):
    try:
        submission_dict = submission.dict()
        submission_dict["created_at"] = datetime.utcnow()

        result = await db.submissions.insert_one(submission_dict)

        return {"status": "success", "message": "Tool submitted", "submission_id": str(result.inserted_id)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Submission failed: {str(e)}")

# ✅ GET route to fetch tools
@app.get("/tools")
async def get_tools():
    try:
        tools_cursor = db.submissions.find()  # Fetch from MongoDB
        tools = await tools_cursor.to_list(100)  # Convert cursor to list
        
        # Return tools in Pydantic model format
        return [Tool(**tool) for tool in tools]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch tools: {str(e)}")

# ✅ Health check endpoint
@app.get("/")
async def root():
    return {"message": "API is running"}
