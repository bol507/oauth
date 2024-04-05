import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config({ path: `.env.local` });

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const githubUrl = process.env.GITHUB_URL;
const frontendUrl = process.env.FRONTEND_URL;
const url = `${githubUrl}?client_id=${clientId}&client_secret=${clientSecret}&code=`;

router.get('/', async (req: Request, res: Response) => {
  await axios({
    method: 'POST',
    url: url + `${req.query.code}`,
    headers: {
      Accept: 'application/json'
    }
  }).then((response: AxiosResponse<{ access_token: string }>) => {
    res.redirect(`${frontendUrl}?access_token=${response.data.access_token}`);
  });
});

export default router;
