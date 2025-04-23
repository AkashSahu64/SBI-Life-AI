import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Validate Environment Variables
const { MONGODB_URI } = process.env;
if (!MONGODB_URI) {
    console.error("❌ MongoDB URI is missing in environment variables.");
    process.exit(1); 
}

// MongoDB Connection Function
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection failed");
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

export default connectDB;
