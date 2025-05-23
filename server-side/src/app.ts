import express from 'express';
import cors from 'cors';
import githubRoutes from './routes/githubRoutes';
import contactRoutes from './routes/contactRoutes';
import testimonialRoutes from "./routes/testimonial.routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/github', githubRoutes);
app.use('/api/contact', contactRoutes);
app.use("/api/testimonials", testimonialRoutes);
export default app;
