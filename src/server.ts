import express, {Request, Response} from 'express';
import router from './routes/index';
import routerPainel from './routes/painel';

const server = express();

server.use('/',router);
server.use('/painel', routerPainel);


server.listen(3000, () => { console.log('🔥 server on http://localhost:3000')});