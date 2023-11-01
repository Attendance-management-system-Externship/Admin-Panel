import {Admin} from "../models/models.js";
import { generateToken } from "../utils/jwt_token.js";


export const createAdmin = async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        res.status(201).json({admin});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const loginHandler = async (req, res) => {
    try{
        const {email, password} = req.body;
        const admin = await Admin.findOne({email: email});
        if(admin){
            if(admin.password === password){
                const token = generateToken(admin.email, admin.role);
                res.status(200).json({token});
            }else{
                res.status(400).json({error: "Invalid Credentials"});
            }
        }else{
            res.status(400).json({error: "Invalid Credentials"});
        }
    }catch(error){
        res.status(500).json({error: error.message});
    }
}