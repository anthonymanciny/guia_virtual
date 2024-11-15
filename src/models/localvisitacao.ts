import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; // Importe o sequelize configurado para conexão
import { Optional } from 'sequelize';

interface LocalVisitacaoAttributes {
  idlocal_visitacao: number;
  Nome: string;
  Descricao: string;
}

// Define quais atributos são opcionais ao criar uma nova instância de LocalVisitacao
interface LocalVisitacaoCreationAttributes extends Optional<LocalVisitacaoAttributes, 'idlocal_visitacao'> {}

class LocalVisitacao extends Model<LocalVisitacaoAttributes, LocalVisitacaoCreationAttributes> implements LocalVisitacaoAttributes {
  public idlocal_visitacao!: number;
  public Nome!: string;
  public Descricao!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializa o modelo
LocalVisitacao.init(
  {
    idlocal_visitacao: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descricao: {
      type: DataTypes.TEXT,
      allowNull: true, // Permite valores nulos, caso a descrição não seja obrigatória
    },
  },
  {
    sequelize, // Conexão do Sequelize importada
    tableName: 'locais_visitacao', // Define o nome da tabela no banco de dados
    timestamps: true, // Inclui os timestamps createdAt e updatedAt
  }
);

export default LocalVisitacao;
