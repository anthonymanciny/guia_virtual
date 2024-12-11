import fs from 'fs';
import path from 'path';
import imageup from '../middleware/multerImageConfig'; // Configuração para upload de imagem
import express, { Router, Request, Response } from 'express';

export class ImageRouter {
    public readonly router!: Router;

    constructor() {
        this.router = express.Router();
        
        // Rota POST para upload de imagem
        this.router.post('/images', imageup.array('imageFile'), (req, res) => {
            if (!req.files || req.files.length === 0) {
                return res.status(400).send('Nenhum arquivo de imagem enviado.');
            }
        
            // Processa os arquivos
            const files = req.files as Express.Multer.File[]; // Cast para o tipo correto
        
            // Responde com os detalhes dos arquivos enviados
            const fileDetails = files.map(file => ({
                filename: file.filename,
                message: 'Arquivo de imagem enviado com sucesso!',
                path: file.path,
            }));
        
            res.send({
                audios: fileDetails,
            });
        });

        this.router.get('/images', (req, res) => {
            const imagesDirectory = path.join(__dirname, '../uploads/image'); // Ajuste o caminho para o diretório onde as imagens são armazenadas
        
            // Lê os arquivos do diretório
            fs.readdir(imagesDirectory, (err, files) => {
                if (err) {
                    return res.status(500).send('Erro ao ler o diretório de imagens.');
                }
        
                // Filtra os arquivos para pegar apenas as imagens (supondo extensões .jpg, .jpeg, .png)
                const imageFiles = files.filter(file => 
                    file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
                );
               
        
                // Responde com a lista de imagens
                res.send({
                    message: 'Lista de áudios encontrados.',
                    images: imageFiles, // Caminho da imagem
                    });
                });
            });
        };















    }

