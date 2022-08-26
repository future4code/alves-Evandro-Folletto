import { Request, Response } from "express";
import app from './app';

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!')
})