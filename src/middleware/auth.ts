import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Atualizado para incluir o tipo global do Express
declare global {
  namespace Express {
    interface Request {
      userId?: string; // Adicionando userId na interface
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(403).json({ message: 'Token de autenticação não fornecido.' });
    return; // Corrigido: Interrompe sem retornar explicitamente o Response
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    req.userId = decoded.idUsuario; // Corrigido: Usando `req.userId` em vez de `req.body.userId`
    next(); // Continua o fluxo do middleware
  } catch (err) {
    res.status(403).json({ message: 'Token inválido.' });
  }
};
