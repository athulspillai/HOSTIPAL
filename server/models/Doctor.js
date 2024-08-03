import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    workingdays: {
        type: String,
        required: true
    },
    workinghours: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false // New field for storing the image path
    }
})

const Doctor = mongoose.model('Doctor', doctorSchema)

export default Doctor