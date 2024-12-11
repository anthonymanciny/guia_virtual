import express, { Router } from 'express';
import { PontoVisitacaoController } from '../controllers/pontovisitacao-controller';
import { authenticateJWT } from '../middleware/auth';
import multer from 'multer';
import upload from '../middleware/upload-mid';

// Configuração do multer para upload de arquivos

export class PontoVisitacaoRouter {
    public readonly router!: Router;
    private pontovisitacaoController: PontoVisitacaoController;

    constructor() {
        this.router = express.Router();
        this.pontovisitacaoController = new PontoVisitacaoController();

        // Rota para criar um novo ponto
        this.router.post(
            '/criar',
            authenticateJWT, // Middleware de autenticação JWT
            upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), // Middleware de upload de arquivos
            (req, res) => {
                this.pontovisitacaoController.criar(req, res); // Chama o método criar do controller
            }
        );

        // Rota para buscar um ponto pelo ID
        this.router.get('/buscar/:id', (req, res) => {
            this.pontovisitacaoController.buscar(req, res);
        });
        
        // Rota para buscar pontos por ID do local de visitação
        this.router.get('/buscarlocal/:idLocalVisitacao', (req, res) => {
            this.pontovisitacaoController.buscarPorIdLocalVisitacao(req, res);
        });

        // Rota para listar todos os pontos
        this.router.get('/listar', (req, res) => {
            this.pontovisitacaoController.listar(req, res);
        });

        // Rota para alterar um ponto existente
        this.router.put('/alterar/:id', authenticateJWT, (req, res) => {
            this.pontovisitacaoController.alterar(req, res);
        });

        // Rota para excluir um ponto pelo ID
        this.router.delete('/excluir/:id', authenticateJWT, (req, res) => {
            this.pontovisitacaoController.excluir(req, res);
        });
    }
}
