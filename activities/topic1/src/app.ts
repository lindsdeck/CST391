import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

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