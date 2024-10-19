import Auth from "../models/auth.model.js";
export async function GETUSERS(req, res) {
    try {
        const user = await Auth.find();
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
