import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize';
import { LocalVisitacaoModel } from './localvisitacao-model';

export class PontoVisitacaoModel extends Model {
  private _idPontoVisitacao!: number;
  private _idLocalVisitacao!: number;
  private _nome!: string;
  private _imagem?: string 
  private _mapa?:string
  private _audio?: string 
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

  get imagem(): string | undefined {
    return this._imagem;
  }

  set imagem(value: string | undefined) {
    this._imagem = value;
  }

  get mapa(): string | undefined {
    return this._mapa;
  }

  set mapa(value: string | undefined) {
    this._mapa = value;
  }

  get audio(): string | undefined {
    return this._audio;
  }

  set audio(value: string | undefined) {
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
      type: DataTypes.STRING(255), // Para armazenar o caminho ou URL
      allowNull: true,
    },
    mapa: {
      type: DataTypes.STRING(255), // Para armazenar o caminho ou URL
      allowNull: true,
    },
    audio: {
      type: DataTypes.STRING(255), // Para armazenar o caminho ou URL
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

// Definir a associação entre os modelos
PontoVisitacaoModel.belongsTo(LocalVisitacaoModel, {
  foreignKey: 'idLocalVisitacao',
});
LocalVisitacaoModel.hasMany(PontoVisitacaoModel, {
  foreignKey: 'idLocalVisitacao',
});