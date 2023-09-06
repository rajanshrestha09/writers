import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, "Enter first name"]
    },
    lastname:{
        type: String,
        required: [true, "Enter first name"]
    },
    email:{
        type: String,
        required: [true, "Enter first name"],
        unique: true
    },
    username:{
        type: String,
        required: [true, "Enter first name"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Enter first name"]
    }
})


const User = mongoose.models.singup_users || mongoose.model("singup_users", userSchema)

export default User;