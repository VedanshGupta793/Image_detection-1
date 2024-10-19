import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Mainrouter from "./routes/main.routes.js";
import HealthRoute from "./routes/health.routes.js";
import AuthRoute from "./routes/auth.routes.js";
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
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    methods: "GET, POST, PUT, DELETE"
};
async function main(PORT) {
    const app = express();
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use("/", cors(corsOptions), Mainrouter);
    app.use("/health", HealthRoute);
    app.use("/auth", AuthRoute);
    connectToDatabase().then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }).catch((error) => {
        console.error("Error connecting to database: ", error);
    });
}
main(3000);
