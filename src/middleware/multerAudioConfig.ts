import multer, { StorageEngine } from 'multer';
import path from 'path';

// Configuração de armazenamento
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/audio')); // Define a pasta de upload
  },
  filename: (req, file, cb) => {
    cb(null,`${Date.now()}-${file.originalname}`);
  },
});

// Configuração do Multer
const audioup = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Limite de 5 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['audio/mpeg', 'audio/mp4', 'audio/wav'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Somente arquivos MP3 , MP4 e WAV são permitidos.'));
    }
  },
});

export default audioup;
