import { Router } from 'express';
import { UsuarioRouter } from './usuario-router';
import { LocalVisitacaoRouter } from './localvisitacao-router';

const router = Router();

// Instanciando os routers
const usuarioRouter = new UsuarioRouter();
const localVisitacaoRouter = new LocalVisitacaoRouter();

// Registrando as rotas
router.use('/usuarios', usuarioRouter.router);
router.use('/locais', localVisitacaoRouter.router);

export default router;
