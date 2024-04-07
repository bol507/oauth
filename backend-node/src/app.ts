import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//utils
import middleware from './utils/middleware'

//routers
import oauthRouter from './routes/oauth'
import userRouter from './routes/user'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

app.use('/oauth/redirect',oauthRouter);
app.use('/api/user',userRouter);

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app