import mysql, { Connection } from 'mysql2/promise';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

interface DBConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

// Configurações do banco de dados usando variáveis de ambiente
const dbConfig: DBConfig = {
  host: process.env.HOST || 'localhost', // Definindo um valor padrão
  user: process.env.USER_NAME || 'root',  // Definindo um valor padrão
  password: process.env.PASSWORD || '',  // Definindo um valor padrão
  database: process.env.DATABASE_NAME || '', // Certifique-se de que DATABASE_NAME está configurado no .env
};

// Nome da tabela que você deseja dropar, deve ser configurado no .env
const tableName = process.env.DATABASE_NAME; // Usando a variável TABLE_NAME para o nome da tabela

// Verifica se o nome da tabela foi definido no arquivo .env
if (!tableName) {
  throw new Error('Nome da tabela não definido no arquivo .env');
}

const dropTable = async (table: string): Promise<void> => {
  let connection: Connection | null = null;

  try {
    // Cria a conexão com o banco de dados
    connection = await mysql.createConnection(dbConfig);

    // Verifica se o banco de dados foi definido e seleciona o banco
    if (dbConfig.database) {
      console.log(`Conectando ao banco de dados: ${dbConfig.database}`);
      await connection.query(`USE \`${dbConfig.database}\`;`);  // Garante que o banco correto está sendo usado
    }

    // Comando SQL para dropar a tabela
    const query = `DROP DATABASE IF EXISTS \`${table}\``;
    console.log(`Executando o comando SQL: ${query}`);

    // Executa o comando
    const [result] = await connection.execute(query);

    // Se o resultado não for vazio, a tabela foi droppada
    console.log(`Tabela "${table}" foi removida com sucesso.`);
  } catch (error: any) {
    console.error('Erro ao dropar a tabela:', error.message);
    console.error('Detalhes do erro:', error);
  } finally {
    // Fecha a conexão com o banco de dados
    if (connection) {
      await connection.end();
    }
  }
};

// Executa a função para dropar a tabela
dropTable(tableName);
