import express, {Request, Response} from 'express';

const server = express();

server.use(express.json());

server.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'Ok'})
})

server.post('/user', (req: Request, res: Response) => {
    const body = req.body
    console.log(body);
    res.status(201).json({message: 'Create user'})
})

server.listen(5000, () => console.log('Server On'))