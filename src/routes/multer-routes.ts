import specificFileUpload from "../middleware/multer";
import express, { Router, Request, Response } from 'express';

export class MulterRouter {
    public readonly router!: Router;

    constructor() {
        this.router = express.Router();
        
        // Rota POST para upload de arquivo
        this.router.post('/', specificFileUpload.single('profilePic'), (req: Request, res: Response) => {
            if (!req.file) {
                return res.status(400).send('Nenhum arquivo enviado.');
            }
            const file = req.file;
            res.send({
                filename: file.filename,
                message: 'Arquivo enviado com sucesso!',
                path: file.path,
            });
        });

        // Rota GET para acessar o dashboard
        this.router.get('/', (req: Request, res: Response) => {
            res.send('Bem-vindo ao Dashboard');
        });
    }
}
