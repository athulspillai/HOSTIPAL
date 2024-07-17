import express from 'express';
import UserController from '../controllers/login.js';

const router = express.Router();

router.post('/register', UserController.RegisterUser);
router.post('/login', UserController.LoginUser);

export default router