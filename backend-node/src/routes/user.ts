import express, { Request, Response } from 'express';
import axios from 'axios';
import logger from '../utils/logger';


const router = express.Router();

const githubApiUrl = 'https://api.github.com/user';

router.get('/', async (req: Request, res: Response) => {
  try {
    const token = req.headers["authorization"];
    const response = await axios({
      method: 'GET',
      url: githubApiUrl,
      headers: {
        Authorization: token,
      },
    });
    res.statusCode = 200;
    res.send(response.data);
  } catch (error: any) {
    logger.error(error.message);
    const statusCode = error.response ? error.response.status : 500;
    res.statusCode = statusCode;
    res.send(error.message);
  }
});

export default router;
