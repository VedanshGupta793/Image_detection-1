import mongoose from "mongoose";
const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profile_pic: {
        type: String,
        required: true
    }
});
const Auth = mongoose.models.Auth || mongoose.model("Auth", authSchema);
export default Auth;
