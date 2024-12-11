import { Router } from 'express';
import { UsuarioRouter } from './usuario-router';
import { LocalVisitacaoRouter } from './localvisitacao-router';
import { PontoVisitacaoRouter } from './pontovisitacao-router';
import { AuthRouter } from './auth-route';
// import { UploadRouter } from './upload-routes';

const router = Router();

// Instanciando os routers
const usuarioRouter = new UsuarioRouter();
const localVisitacaoRouter = new LocalVisitacaoRouter();
const pontoVisitacaoRouter = new PontoVisitacaoRouter();
const authRouter = new AuthRouter();
// const uploadRouter = new UploadRouter();

// Registrando as rotas
router.use('/usuarios', usuarioRouter.router);
router.use('/locais', localVisitacaoRouter.router);
router.use('/pontos', pontoVisitacaoRouter.router);
router.use('/auth', authRouter.router);
// router.use('/upload',uploadRouter.router);







export default router;
