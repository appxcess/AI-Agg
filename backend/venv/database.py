from pymongo import MongoClient

MONGO_URI = "mongodb://localhost:27017"  # Change if using a different setup
client = MongoClient(MONGO_URI)
db = client["tool_submission"]
collection = db["submissions"]
