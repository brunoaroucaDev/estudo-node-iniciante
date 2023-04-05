import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Pagina Home')
});

router.get('/contato', (req: Request, res: Response) => {
  res.send('Formulário de contato')
});

router.get('/sobre', (req: Request, res: Response) => {
  res.send('Minha pagina Institucional sobre a empresa')
});

export default router;
