// pages/api/search.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await client.connect();
    const db = client.db('toolify_db');
    const collection = db.collection('submission');

    const { query } = req.body;

    // Create a text index for better search (run this once in your MongoDB setup)
    // await collection.createIndex({ name: "text", description: "text", tags: "text" });

    const results = await collection.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } }
      ]
    })
    .limit(10)
    .toArray();

    res.status(200).json(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Search failed' });
  } finally {
    // await client.close();
  }
}