import express, { Request, Response } from 'express';
import { globalErrorHandler } from './middleware/globalMiddleware';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

export default app;
