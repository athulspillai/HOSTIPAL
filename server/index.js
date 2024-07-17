import express from 'express'
import cors from 'cors';
import connectToDatabase from './config/db.js';
import loginroutes from './routes/loginroutes.js';



const server = express();
const port = process.env.PORT || 8000;

server.use(cors({origin:"*"}));
server.use(express.json({limit:'50mb'}));


connectToDatabase();

server.use('/user', loginroutes)


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});