import express from 'express';
import mongoose from 'mongoose';

import loginModel from "../models/loginModel.js";

const router = express.Router();
export const getLogin = async(req, res) => {
    try{
        const loginModels = await loginModel.find();
        res.status(200).json(loginModels);
    }
    catch(error) {
        res.status(404).json({message : error.message});
    }
    // res.send('Logged In');
    
}

export const createLogin = async (req, res) => {
    const { fullname, email, phonenumber, password } = req.body;

    const newLogin= new loginModel({ fullname, email, phonenumber, password })

    try {
        await newLogin.save();

        res.status(201).json(newLogin);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export default router;