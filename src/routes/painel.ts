import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Pagina do painel')
});

router.get('/noticias', (req: Request, res: Response) => {
  res.send('Cadastrar noticias')
});

router.get('/usuarios', (req: Request, res: Response) => {
  res.send('Lista de usuarios')
});

export default router;
