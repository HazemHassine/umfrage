import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function dbConnect() {
  try {
    if (mongoose.connection.readyState !== 1) {
      const conn = await mongoose.connect(MONGODB_URI, {
        bufferCommands: false, // Disable mongoose buffering
      });
      console.log('Connected to MongoDB');
      return conn;
    }
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default dbConnect;
