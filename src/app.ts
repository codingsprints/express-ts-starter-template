import express, { Request, Response } from 'express';
import { globalErrorHandler } from './middleware/globalMiddleware';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

export default app;
