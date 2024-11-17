import { Request, Response } from 'express';
import { UsuarioModel } from '../models/usuario-model';
import nodemailer from 'nodemailer'
import cryto from 'crypto'


// Função para login
export const forgotPasswoed = async (req: Request, res: Response) => {
  try {
    const { emailUsuario } = req.body;

    // Verificar se o usuário existe
    const user = await UsuarioModel.findOne({ where: { emailUsuario } });

    const transporter = nodemailer.createTransport({

            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "592a5d197a27b4",
              pass: "********58c6"
            }
    })

    const newPassword = cryto.randomBytes(4).toString('hex')
    
    transporter.sendMail({
        from:'ADMIN '
    })




 
  


} catch (error) {
    return res.status(400).json({ message: 'Email ou senha inválidos.' });
}
};
