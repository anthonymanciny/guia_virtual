// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();

// // Definindo o armazenamento dos arquivos
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);  // Garantir nome único
//   }
// });

// // Inicializando o Multer com o armazenamento definido
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // Limite de 10MB para os arquivos
//   fileFilter: function (req, file, cb) {
//     const allowedTypes = ['image/jpeg', 'image/png', 'audio/mpeg', 'audio/wav'];
//     if (allowedTypes.includes(file.mimetype)) {
//       cb(null, true);  // Aceitar o arquivo
//     } else {
//       cb(new Error('Tipo de arquivo não permitido'), false);
//     }
//   }
// });

// // Middleware para processar o corpo da requisição
// app.use(express.json());

// // Endpoint para criar o ponto de visitação
// app.post('/ponto-visitacao', upload.fields([{ name: 'imagem', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), (req, res) => {
//   try {
//     // Dados do corpo da requisição
//     const { idPontoVisitacao, idLocalVisitacao, nome, texto } = req.body;
    
//     // Arquivos enviados
//     const imagem = req.files['imagem'] ? req.files['imagem'][0].path : null;
//     const audio = req.files['audio'] ? req.files['audio'][0].path : null;
    
//     // Estrutura do objeto a ser salvo
//     const pontoVisitacao = {
//       idPontoVisitacao,
//       idLocalVisitacao,
//       nome,
//       imagem,
//       audio,
//       texto
//     };

//     // Aqui você pode salvar o pontoVisitacao no banco de dados
//     // Por exemplo, usando algo como: 
//     // await PontoVisitacaoModel.create(pontoVisitacao);

//     res.status(200).json({ message: 'Ponto de visitação criado com sucesso!', pontoVisitacao });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Erro ao criar o ponto de visitação', error: error.message });
//   }
// });

// // Iniciando o servidor
// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });
