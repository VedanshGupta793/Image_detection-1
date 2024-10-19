import express from "express";
import { GETUSERS, ADDUSER, DELETEUSER } from "../controller/auth.controller.js";
const AuthRoute = express.Router();
AuthRoute.get("/", GETUSERS);
AuthRoute.post("/", ADDUSER);
AuthRoute.delete("/", DELETEUSER);
export default AuthRoute;
