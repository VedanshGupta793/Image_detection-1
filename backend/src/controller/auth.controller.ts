import { Request, Response } from "express";
import Auth from "../models/auth.model.js";

export async function GETUSERS(req: Request, res: Response) {
    const id = req.query.id;
    try {
        if (id) {
            const user = await Auth.findById({ _id: id });
            res.status(200).json(user);
            return;
        }
        else {
            const user = await Auth.find();
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export async function ADDUSER(req: Request, res: Response) {
    const { username, password, email, profile_pic } = req.body;
    try {
        const user = new Auth({
            username,
            password,
            email,
            profile_pic
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export async function DELETEUSER(req: Request, res: Response) {
    const id = req.query.id;
    try {
        if (id) {
            await Auth.findByIdAndDelete({ _id: id });
            res.status(200).json({ message: "User deleted successfully" });
            return;
        }
        else {
            res.status(400).json({ message: "Bad Request" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}