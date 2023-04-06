import { Router, Request, Response } from 'express';

const router = Router();
const menu = ['Inicio', 'Sobre', 'Raças', 'Cuidado', 'Contato']

router.get('/', (req: Request, res: Response) => {

  res.render('pages/home', {
    titlePage: "Home",
    name: 'Bruno',
    lastname: 'Arouca',
    menu,
    racas:[
      {nome: 'Labrador Retriever', porte: 'Grande'},
      {nome: 'Golden Retriever', porte: 'Grande'},
      {nome: 'Bulldog Francês', porte: 'Médio'},
      {nome: 'Poodle', porte: 'Pequeno'}
    ]
  })
});

router.get('/contato', (req: Request, res: Response) => {
  res.render('pages/contato', {
    titlePage: 'Contato',
    menu
  })
});

router.get('/sobre', (req: Request, res: Response) => {
  res.render('pages/sobre', {
    titlePage: 'Sobre nós',
    menu
  })
});

export default router;
