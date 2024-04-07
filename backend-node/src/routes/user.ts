import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';


const router = express.Router();

const githubApiUrl = 'https://api.github.com/user';

router.get('/', async (req: Request, res: Response) => {
  const token = req.headers["authorization"];
  await axios({
    method: 'GET',
    url: githubApiUrl,
    headers: {
      Authorization: token,
    }
  }).then((response: AxiosResponse) => {
    res.statusCode = 200;
    res.send(response.data);
  }).catch((err) => {
    console.log(`Error occured ${err}`);
  });
});

export default router;
