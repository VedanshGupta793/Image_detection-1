import express from "express";
const HealthRoute = express.Router();
HealthRoute.get("/", (req, res) => {
    res.send("Healthy status").status(200);
});
export default HealthRoute;
