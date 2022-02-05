
import express, { NextFunction, Request, Response } from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configuracao da aplicacao

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuracao das rotas
app.use(statusRoute);
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ status: 'success' });
});

app.listen(3000, () => {
    console.log('Aplicativo executando na porta 3000');
});