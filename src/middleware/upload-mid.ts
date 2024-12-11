import multer, { StorageEngine } from 'multer';
import path from 'path';

// Configuração de armazenamento dinâmica
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define a pasta de upload com base no tipo de arquivo
    if (file.mimetype.startsWith('audio')) {
      cb(null, path.join(__dirname, '../uploads/audio'));
    } else if (file.mimetype.startsWith('image')) {
      cb(null, path.join(__dirname, '../uploads/image'));
    } else {
      cb(new Error('Tipo de arquivo não suportado'), '');
    }
  },
  filename: (req, file, cb) => {
    // Define o nome do arquivo com timestamp
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Configuração do filtro de arquivos
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedAudioTypes = ['audio/mpeg', 'audio/mp4', 'audio/wav'];
  const allowedImageTypes = ['image/jpeg', 'image/png'];

  if (allowedAudioTypes.includes(file.mimetype) || allowedImageTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Somente arquivos de áudio (MP3, MP4, WAV) e imagens (JPEG, PNG) são permitidos.'));
  }
};

// Configuração do Multer
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Limite de 10 MB
  },
  fileFilter,
});

export default upload;
