import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const UserService = {
    RegisterUser: async (details) => {
        const { username, email, mobilenumber, password } = details;
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return { status: 409, message: 'Email already exists.' };
            }
            const newUser = new User({ username, email, mobilenumber, password });
            await newUser.save();
            return { status: 201, message: 'User registered successfully.' };
        } catch (error) {
            return { status: 500, message: 'Error registering user.' };
        }
    },

    LoginUser: async (email, password) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw { status: 401, message: 'Email is incorrect.' };
            }
            if (user.password !== password) {
                throw { status: 401, message: 'Password is incorrect.' };
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
            return { status: 200, token, message: 'Login successful.' };
        } catch (error) {
            throw { status: error.status || 500, message: error.message || 'Error logging in.' };
        }
    },

    SendOtp: async (email, session) => {
        const otp = generateOtp();
        console.log(`Generated OTP: ${otp}`);
        session.otp = otp;
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`
        };

        try {
            await transporter.sendMail(mailOptions);
            return { status: 200, message: 'OTP sent.', otp }; // Return OTP
        } catch (error) {
            console.error('Error sending OTP:', error);
            return { status: 500, message: 'Error sending OTP.' };
        }
    }
};

export default UserService;
