import { Router } from 'express';
import { UsuarioRouter } from './usuario-router';
import { LocalVisitacaoRouter } from './localvisitacao-router';
import { AuthRouter } from './auth-route';

const router = Router();

// Instanciando os routers
const usuarioRouter = new UsuarioRouter();
const localVisitacaoRouter = new LocalVisitacaoRouter();
const authRouter = new AuthRouter()

// Registrando as rotas
router.use('/usuarios', usuarioRouter.router);
router.use('/locais', localVisitacaoRouter.router);
router.use('/auth', authRouter.router);


export default router;
