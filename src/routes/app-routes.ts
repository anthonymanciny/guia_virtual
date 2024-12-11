import { Router } from 'express';
import { UsuarioRouter } from './usuario-router';
import { LocalVisitacaoRouter } from './localvisitacao-router';
import { PontoVisitacaoRouter } from './pontovisitacao-router';
import { AuthRouter } from './auth-route';
import { AudioRouter } from './audio-routes';
import { ImageRouter } from './image-routes';

const router = Router();

// Instanciando os routers
const usuarioRouter = new UsuarioRouter();
const localVisitacaoRouter = new LocalVisitacaoRouter();
const pontoVisitacaoRouter = new PontoVisitacaoRouter();
const authRouter = new AuthRouter()
const audioRouter = new AudioRouter
const imageRouter = new ImageRouter

// Registrando as rotas
router.use('/usuarios', usuarioRouter.router);
router.use('/locais', localVisitacaoRouter.router);
router.use('/pontos', pontoVisitacaoRouter.router);
router.use('/auth', authRouter.router);
router.use('/upload',audioRouter.router);
router.use('/upload',imageRouter.router);






export default router;
