
import mongoose from "mongoose";
// import {config as conf} from 'dotenv'
// conf()

const mongoUrl= process.env.DATABASE_URL || "mongodb://localhost:27017/Task1"


const connectDb=async()=>{
    try {
        await mongoose.connect(mongoUrl);
        console.log(`MongoDb Connected`)
      } catch (err) {
        console.log("failed to connect",err);
      }
      
}

export default connectDb
