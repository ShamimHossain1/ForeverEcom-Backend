import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// App Config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares  

app.use(cors());
app.use(express.json());

// api endpoint

app.get('/', (req, res)=>{
    res.send("Api is working");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});