import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';

import mainRouter from './routes/index';
import routerPainel from './routes/painel';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use('/',mainRouter);
server.use('/painel', routerPainel);
server.use(express.static(path.join(__dirname, '../public')));



server.use((req: Request, res: Response) => {
  res.status(404).send('Error 404 - Página não encontrada')
})


server.listen(3000, () => { console.log('🔥 server on http://localhost:3000')});