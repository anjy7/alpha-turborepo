import mongoose from 'mongoose';
// require('dotenv').config();

export const connectDB = async () => {
 try {
   //write code to take from env
    await mongoose.connect("");
    console.log('MongoDB Connected...');
 } catch (err) {
    console.error(err.message);
    process.exit(1);
 }
};

// module.exports = connectDB;