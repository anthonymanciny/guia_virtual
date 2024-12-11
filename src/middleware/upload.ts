import multer, { StorageEngine } from 'multer';
import path from 'path';

// Configuração de armazenamento
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Define a pasta de upload
  },
  filename: (req, file, cb) => {
    cb(null,`${Date.now()}-${file.originalname}`);
  },
});

// Configuração do Multer
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite de 5 MB
  },
  fileFilter: (req, file, cb) => {
    // Aceita apenas imagens JPEG e PNG
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Somente arquivos JPEG e PNG são permitidos.'));
    }
  },
});

export default upload;
