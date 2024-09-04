import UserSchema from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator';
import { decrypt, encrypt } from "../../utils/encryption.js";

const SECRET_KEY='poorv'
export const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body
    try {
        const existingUser = await UserSchema.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ error: 'User already exists' });
        }

        const encryptedPassword = encrypt(req.body.password);
        const newUser = new UserSchema({ ...req.body, password: encryptedPassword });
        
        const response = await newUser.save();
        const token = jwt.sign({ id: response.id, email: response.email }, SECRET_KEY);
        
        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 3600000),
            httpOnly: true,
        }).status(201).json({ id: response.id, email: response.email, token });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserSchema.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const decryptedPassword = decrypt(user.password);

        if (decryptedPassword === password) {
            const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
                expiresIn: '1h',
            });

            res.cookie('jwt', token, {
                expires: new Date(Date.now() + 3600000), 
                httpOnly: true, 
            }).status(200).json({ id: user._id, token });
        } else {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const fetchUserbyId = async (req, res) => {

    try {
        const User = await UserSchema.findById(req.user.id)

        if (!User) return res.status(404).json({ error: 'User not found' });

        const decryptedPassword = decrypt(User.password);

        res.status(200).json({ name: User.name,  email: User.email, phone: User.phone,password:decryptedPassword })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const fetchUserByIdAndUpdate = async (req, res) => {
    const updatedData = req.body
    try {
        const updatedUser = await UserSchema.findByIdAndUpdate(req.user.id, updatedData, { new: true })
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json(err);
    }
}