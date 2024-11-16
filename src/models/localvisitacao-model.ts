import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/sequelize'


export class LocalVisitacaoModel extends Model {
    private _idlocal_visitacao!: number;
    private _nome!: string;
    private _descricao?: string;
    
    get idlocal_visitacao(): number {
      return this._idlocal_visitacao;
    }
    
    set idlocal_visitacao(value: number) {
      this._idlocal_visitacao = value;
    }
    
    get nome(): string {
      return this._nome;
    }
    
    set nome(value: string) {
      this._nome = value;
    }
    
    get descricao(): string | undefined {
      return this._descricao;
    }
  
    set descricao(value: string | undefined) {
      this._descricao = value;
    }
  
}

LocalVisitacaoModel.init(
  {
      idlocal_visitacao: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
      },
      nome: {
          type: DataTypes.STRING(255),
          allowNull: false,
      },
      descricao: {
          type: DataTypes.TEXT,
          allowNull: true,
      },
  },
    {
        sequelize,
        modelName: "LocalVisitacaoModel",
        tableName: "tbl_local_visitacao",
        timestamps: false,
    }
)