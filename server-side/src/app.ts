import express from 'express';
import cors from 'cors';
import githubRoutes from './routes/githubRoutes';
//import contactRoutes from './routes/contactRoutes';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/github', githubRoutes);
//app.use('/api/contact', contactRoutes);

export default app;
