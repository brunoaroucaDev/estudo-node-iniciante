import express, {Request, Response} from 'express';
import router from './routes/index';
import routerPainel from './routes/painel';

const server = express();

server.use('/',router);
server.use('/painel', routerPainel);

server.use((req: Request, res: Response) => {
  res.status(404).send('Error 404 - Página não encontrada')
})


server.listen(3000, () => { console.log('🔥 server on http://localhost:3000')});