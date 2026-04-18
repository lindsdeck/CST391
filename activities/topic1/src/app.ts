import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// enable all CORS requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send(process.env.GREETING);
});

// Routers
app.use('/', albumsRouter);
app.use('/', artistsRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});