import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        minlength: [10, 'Phone number must be 10 characters long'],
        required: true,
    },
    password: {
        iv: { type: String,required:true }, 
        encryptedData: { type: String ,required: true}, 
        // minlength: [6, 'Password must be at least 6 characters long'],
    },

   
}, {
    timestamps: true
})

const UserSchema = mongoose.model('User', UserModel)

export default UserSchema