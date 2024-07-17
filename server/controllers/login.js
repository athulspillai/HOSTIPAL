import UserService from "../services/login.js";
import User from "../models/user.js";

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
            res.status(result.status).json({ token: result.token , message: 'Login successfully' });
        } catch (error) {
            console.error(error);
            res.status(error.status).json({ message: 'Error logging in.' });
        }
    },
}

export default UserController