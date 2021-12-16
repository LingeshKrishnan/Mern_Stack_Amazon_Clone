import express from 'express';
import mongoose from 'mongoose';

import productModel from "../models/productModel.js";

const router = express.Router();
export const getProducts = async(req, res) => {
    try{
        const productModels = await productModel.find();
        res.status(200).json(productModels);
    }
    catch(error) {
        res.status(404).json({message : error.message});
    }
    // res.send('Logged In');    
}

export const createProducts = async (req, res) => {
    
    const { title, image, price, rating }  = req.body;
    const newProduct= new productModel({ title, image, price, rating })        ;
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}


export default router;