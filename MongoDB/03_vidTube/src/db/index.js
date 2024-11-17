import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected ! DB host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection error ", error);
        process.exit(1);
    }
} 

export default connectDB