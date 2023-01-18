import mongoose from "mongoose";

const User = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    phone:{type: String, required: true},
    adress:{type: String}
})

export default mongoose.model('User', User)