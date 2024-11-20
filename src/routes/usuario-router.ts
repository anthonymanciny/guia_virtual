import express, { Router } from 'express';
import { UsuarioController } from '../controllers/usuario-controller';
import { authenticateJWT } from '../middleware/auth';

export class UsuarioRouter {
    public readonly router!: Router;
    private usuarioController: UsuarioController;

    constructor() {

        this.router = express.Router();
        this.usuarioController = new UsuarioController();

        this.router.post('/criar',  authenticateJWT,(req, res) => {
            this.usuarioController.criar(req, res);
        });

        this.router.get('/buscar/:id', (req, res) => {
            this.usuarioController.buscar(req, res);
        });

        this.router.get('/listar', (req, res) => {
            this.usuarioController.listar(req, res);
        });


        this.router.put('/alterar/:id',authenticateJWT, (req, res) => {
            this.usuarioController.alterar(req, res);
        });

        this.router.delete('/excluir/:id',authenticateJWT, (req, res) => {
            this.usuarioController.excluir(req, res);
        });
    }
}