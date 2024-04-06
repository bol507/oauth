import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import oauthRouter from './routes/oauth'

dotenv.config({ path: `.env.local` });
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));
app.use('/oauth/redirect',oauthRouter)

app.listen(port, () => console.log(`listening on port ${port}`));