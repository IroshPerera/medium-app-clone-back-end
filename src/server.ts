import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import userRoutes from './routes/userRoutes';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app: Application = express();

// Connect to database
connectDB();

app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);

//Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
