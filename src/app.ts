import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFoundRoutes from './middlewares/notFoundRoutes';

app.use(express.json());
app.use(cors());

// app route

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('jack mart sport shop running');
});

//not found routes
app.use(notFoundRoutes);

// global error handling

app.use(globalErrorHandler);
export default app;
