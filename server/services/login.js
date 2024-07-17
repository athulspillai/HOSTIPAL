import User from "../models/user.js";
import jwt from 'jsonwebtoken';

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
                throw { status: 401, message: 'Email IS INCORRECT' };
            }
            if (user.password !== password) {
                throw { status: 401, message: 'PASSWORD IS INCORRECT' };
            }
            const token = jwt.sign({ username: user._id }, 'your-secret-key');
            return { status: 200, token, message: 'Login successful.' };
        } catch (error) {
            throw { status: 500, message: 'Error logging in.' };
        }
    },
}


export default UserService