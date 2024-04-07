import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const unknownEndpoint = (_req:Request, res:Response) => {
	res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error: Error, _req:Request, res:Response, next:NextFunction):void => {
	logger.error(error.message)

	if (error.name === 'CastError') {
		res.status(400).send({ error: 'malformatted id' })
	} else if (error.name === 'ValidationError') {
		res.status(400).json({ error: error.message })
	}


	next(error)
}


export default { unknownEndpoint, errorHandler };