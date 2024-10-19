import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Mainrouter from "./routes/main.routes.js";
dotenv.config();
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test");
        console.log("Connected to database");
    }
    catch (error) {
        console.error("Error connecting to database: ", error);
    }
}
async function main(PORT) {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/", Mainrouter);
    connectToDatabase().then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }).catch((error) => {
        console.error("Error connecting to database: ", error);
    });
}
main(3000);
