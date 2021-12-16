import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    
    title: String,
    image: String,
    price: Number,
    rating: Number

});

const productModel = mongoose.model('productModel', productSchema);

export default productModel;