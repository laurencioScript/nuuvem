import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes/index';
import bodyParser from 'body-parser'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

const versionApi = process.env.VERSION_API || 'v1';

app.use(`/api/${versionApi}`, routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});