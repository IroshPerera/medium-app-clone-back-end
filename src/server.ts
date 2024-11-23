import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import commentsRoutes from './routes/commentRoutes';
import errorHandler from './middlewares/errorHandler';
import cors from 'cors';



dotenv.config();

const app: Application = express();

// Connect to database
connectDB();


const corsOptions = {
  origin: ["http://localhost:8081"], //allow krn origin ek
  methods: ["GET", "POST", "PUT", "DELETE"], // allow krn http headers
  credentials: true, // cookies if needed
};

app.use(cors(corsOptions));

app.use(cors());

app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/comments', commentsRoutes);

//Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
