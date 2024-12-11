import fs from 'fs';
import path from 'path';
import audioup from '../middleware/multerAudioConfig'; // Configuração para upload de áudio
import express, { Router, Request, Response } from 'express';

export class AudioRouter {
    public readonly router!: Router;

    constructor() {
        this.router = express.Router();
        
        // Rota POST para upload de áudio
        this.router.post('/audios', audioup.array('audioFile'), (req: Request, res: Response) => {
            // Verifica se algum arquivo foi enviado
            if (!req.files || req.files.length === 0) {
                return res.status(400).send('Nenhum arquivo de áudio enviado.');
            }
        
            // Processa os arquivos
            const files = req.files as Express.Multer.File[]; // Cast para o tipo correto
        
            // Responde com os detalhes dos arquivos enviados
            const fileDetails = files.map(file => ({
                filename: file.filename,
                message: 'Arquivo de áudio enviado com sucesso!',
                path: file.path,
            }));
        
            res.send({
                audios: fileDetails,
            });
        });

        this.router.get('/audios', (req: Request, res: Response) => {
            const audioDirectory = path.join(__dirname, '../uploads/audio'); // Caminho para o diretório de áudios

            // Verificando se o diretório existe
            fs.readdir(audioDirectory, (err, files) => {
                if (err) {
                    return res.status(500).send('Erro ao ler o diretório de áudios.');
                }

                // Filtrando para pegar apenas arquivos de áudio (com extensão .mp3, por exemplo)
                const audioFiles = files.filter(file => file.endsWith('.mp3'));

                res.send({
                    message: 'Lista de áudios encontrados.',
                    audios: audioFiles,
                });
            });
        });

    }
}
