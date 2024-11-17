import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize';

export class PontoVisitacaoModel extends Model {
  private _idPontoVisitacao!: number;
  private _idLocalVisitacao!: number;
  private _nome!: string;
  private _imagem?: Buffer 
  private _audio?: Buffer 
  private _texto?: string 

  get idPontoVisitacao(): number {
    return this._idPontoVisitacao;
  }

  set idPontoVisitacao(value: number) {
    this._idPontoVisitacao = value;
  }

  get idLocalVisitacao(): number {
    return this._idLocalVisitacao;
  }

  set idLocalVisitacao(value: number) {
    this._idLocalVisitacao = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get imagem(): Buffer | undefined {
    return this._imagem;
  }

  set imagem(value: Buffer | undefined) {
    this._imagem = value;
  }

  get audio(): Buffer | undefined {
    return this._audio;
  }

  set audio(value: Buffer | undefined) {
    this._audio = value;
  }

  get texto(): string | undefined {
    return this._texto;
  }

  set texto(value: string | undefined) {
    this._texto = value;
  }
}

PontoVisitacaoModel.init(
  {
    idPontoVisitacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'idponto_visitacao',
    },
    idLocalVisitacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'idlocal_visitacao',
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagem: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
    audio: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'PontoVisitacaoModel',
    tableName: 'tbl_ponto_visitacao',
    timestamps: false,
  }
);
