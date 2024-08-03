import UserService from "../services/Userlogin.js";
import User from "../models/User.js";

const UserController = {
    RegisterUser: async (req, res) => {
        try {
            const { username, email, mobilenumber, password } = req.body;
            const newUser = new User({ username, email, mobilenumber, password });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error registering user.' });
        }
    },

    LoginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await UserService.LoginUser(email, password);
            res.status(result.status).json({ token: result.token , message: result.message });
        } catch (error) {
            console.error(error);
            res.status(error.status).json({ message: 'Error logging in.' });
        }
    },

    SendOtp: async (req, res) => {
        const { email } = req.body;
        const result = await UserService.SendOtp(email, req.session);
        if (result.status === 200) {
            res.status(result.status).json({ message: result.message, otp: result.otp });
        } else {
            res.status(result.status).json({ message: result.message });
        }
    }
}

export default UserController