import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  console.log('Attempting to connect to MongoDB...');

  try {

    await mongoose.connect(process.env.MONGO_URI || '', {
    });

    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
