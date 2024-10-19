import express from "express";
const Mainrouter = express.Router();
Mainrouter.get("/", (req, res) => {
    res.send("Hello, Vedansh");
});
export default Mainrouter;
