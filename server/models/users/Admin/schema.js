import mongoose from 'mongoose'

const adminDB = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true]
    }
})

export default adminDB