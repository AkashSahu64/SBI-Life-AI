import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/db.js';
import errorMiddleware from './middleware/error.middleware.js';
// import userRouter from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    contentSecurityPolicy: false
}));

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {    
    res.json({ message: 'Server is running...' });
});



app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});