import express, { Router } from 'express';
import { register } from '../controllers/auth/registre-controller';
import { login } from '../controllers/auth/login-controller';

export class AuthRouter {
    public readonly router!: Router;

    constructor() {
        this.router = express.Router();

        // Rota de registro
        this.router.post('/register', (req, res) => {
            register(req, res);
        });

        // Rota de login
        this.router.post('/login', (req, res) => {
            login(req, res);
        });
    }
}
