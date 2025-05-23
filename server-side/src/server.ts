import app from './app';
import dotenv from 'dotenv';
import connectDB from "./config/db.ts";
dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server http://localhost:${PORT} portunda çalışıyor.`);
  });
});