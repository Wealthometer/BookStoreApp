import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        minlenght : 6,
    },
    profileImage : {
        type : String,
        default : "",
    }
});

const User = mongoose.model("User", userSchema);

export default User;