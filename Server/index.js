import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import nodemon  from 'nodemon';
import cors from 'cors';

import loginRoutes from './routes/login.js';
import productRoutes from './routes/product.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/', loginRoutes);
app.use('/',productRoutes);

const CONNECTION_URL = 'mongodb+srv://mernappuser:mernappuser$123@cluster0.pxrnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, ()=> console.log(`Server Running on: ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);