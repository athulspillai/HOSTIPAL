import express from 'express';
import cors from 'cors';
import connectToDatabase from './config/db.js';
import Userloginroutes from './routes/Userloginroutes.js';
import Doctorloginroutes from './routes/Doctorloginroutes.js';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const port = process.env.PORT || 8000;

server.use(cors({ origin: "*" }));
server.use(express.json({ limit: '50mb' }));
server.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the 'uploads' directory

server.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

connectToDatabase();

server.use('/user', Userloginroutes);
server.use('/doctor', Doctorloginroutes);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
