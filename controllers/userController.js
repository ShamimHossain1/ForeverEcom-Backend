// routes for user login
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";

const createToke = (userId) => { 
        return jwt.sign({id}, )
}


const loginUser = async(req, res) => { 
}

// routes for user signup

const registerUser = async(req, res) => { 
   try{
    const{name, email, password} = req.body;

    // checking user already exist or not
    const existUser = await userModel.findOne({email});

    if(existUser){
        return res.status(400).json({success: false, message: "User already exist"});
    }

    // validation email format and strong password

    if(!validator.isEmail(email)){
        return res.status(400).json({success: false, message: "Invalid email format"});
    }
    if(password.length < 6){
        return res.status(400).json({success: false, message: "Password must be at least 6 characters"});
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        name,
        email,
        password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json({success: true, message: "User registered successfully", user});

    const token = 

   }catch(err){
    console.log(err);
   }
}

// Route for admin login
const loginAdmin = async(req, res) => { 
}


export { loginUser, registerUser, loginAdmin }    
