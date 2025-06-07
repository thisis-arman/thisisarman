import mongoose from "mongoose";
import app from "./app";
import config from "./config/config";

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("CONNECTED");


        app.listen(config.port,()=>{
            console.log(`You're running on port ${config.port} `)
        })
        
    } catch (error) {
        console.log("dhora khaichen broo",error);
        
    }
    
}