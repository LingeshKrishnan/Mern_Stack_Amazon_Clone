import mongoose from 'mongoose'

const loginSchema = mongoose.Schema({
    email: String,
    password: String,
    fullname: String,
    phonenumber: Number

});

const loginModel = mongoose.model('loginModel', loginSchema);

export default loginModel;