import mongoose from "mongoose";
import { MONGODB_CONNECTION } from "./config";


export const DATABASE_CONNECTION = async ()=>{
    try {
        await mongoose.connect(MONGODB_CONNECTION , {autoIndex: true});
        console.log("DATABASE CONNECTION SUCCESSFULLY")
    } catch (error) {
        console.log(`FAILED TO CONNECT DATABASE ${error}`)
    }
}

