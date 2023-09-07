import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection
        connection.on('connected', function(){
            console.log("Mongodb connected")
        })
        connection.on("error", function(err){
            console.log("Mongo connection error");
            process.exit();
        })
    } catch (error) {
        console.log(error)
    }
}