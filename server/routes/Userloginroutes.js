import express from 'express';
import UserController from '../controllers/Userlogin.js';

const router = express.Router();

router.post('/register', UserController.RegisterUser);
router.post('/login', UserController.LoginUser);
router.post('/send-otp', UserController.SendOtp);

export default router