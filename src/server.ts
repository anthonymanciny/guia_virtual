import express, { Request, Response } from 'express';
import sequelize from './database/sequelize'; // Conexão com o banco de dados
import router from './routes/app-routes';// Conexão com as rotas


const PORT = process.env.PORT;
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota inicial
app.get('/api', (req: Request, res: Response) => {
    res.send('Bem-vindo ao Guia Virtual');

});

// Usando as rotas do módulo
app.use(router);



// Função de inicialização que conecta ao banco e sobe o servidor
async function initialize() {
    try {
        // Conectando ao banco de dados
        await sequelize.authenticate();
        sequelize.sync({ force: false, alter: false });
        console.log('A conexão com o banco de dados foi estabelecida com sucesso');
    } catch (erro: any) {
        throw new Error('Não foi possível estabelecer conexão com o banco de dados: ' + erro.message);
    }

    try {
        // Levantando o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (erro: any) {
        throw new Error('Não foi possível iniciar o servidor de API: ' + erro.message);
    }
}

// Inicializando a aplicação
initialize();
