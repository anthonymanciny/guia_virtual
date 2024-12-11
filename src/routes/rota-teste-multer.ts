import express from 'express';
import upload from '../middleware/upload';
import { PontoVisitacaoModel } from '../models/ponto-model';

const router = express.Router();

router.post(
  '/ponto-visitacao',
  upload.fields([
    { name: 'imagem', maxCount: 1 }, // Campo para a imagem
    { name: 'audio', maxCount: 1 },  // Campo para o áudio
  ]),
  async (req, res) => {
    try {
      // Dados textuais enviados no body da requisição
      const { nome, texto, idLocalVisitacao } = req.body;

      // Recuperando os caminhos dos arquivos enviados
      const imagemFile = req.files?.['imagem'] ? req.files['imagem'][0] : null;
      const audioFile = req.files?.['audio'] ? req.files['audio'][0] : null;

      // Validação básica para garantir que os campos obrigatórios estão presentes
      if (!nome || !idLocalVisitacao || !imagemFile || !audioFile) {
        return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser preenchidos!' });
      }

      // Criando o registro no banco de dados
      const novoPonto = await PontoVisitacaoModel.create({
        nome,
        texto,
        idLocalVisitacao,
        imagem: imagemFile.path, // Salvar o caminho do arquivo da imagem
        audio: audioFile.path,   // Salvar o caminho do arquivo do áudio
      });

      res.status(201).json({
        mensagem: 'Ponto de visitação cadastrado com sucesso!',
        ponto: novoPonto,
      });
    } catch (error) {
      console.error('Erro ao cadastrar ponto:', error);
      res.status(500).json({ mensagem: 'Erro interno ao cadastrar ponto de visitação.' });
    }
  }
);

export default router;
