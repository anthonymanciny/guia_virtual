import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/sequelize'


export class UsuarioModel extends Model {
    private _idUsuario!: number;
    private _nomeUsuario!: string;
    private _emailUsuario!: string;
    private _senhaUsuario!: string;
    
    get idUsuario(): number {
      return this._idUsuario;
    }
    
    set idUsuario(value: number) {
      this._idUsuario = value;
    }
    
    get nomeUsuario(): string {
      return this._nomeUsuario;
    }
    
    set nomeUsuario(value: string) {
      this._nomeUsuario = value;
    }
    
    get emailUsuario(): string {
      return this._emailUsuario;
    }
    
    set emailUsuario(value: string) {
      this._emailUsuario = value;
    }
    get senhaUsuario(): string {
      return this._senhaUsuario;
    }
    
    set senhaUsuario(value: string) {
      this._senhaUsuario = value;
    }
}

UsuarioModel.init(
    {
        idUsuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        emailUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nomeUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        senhaUsuario: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: "UsuarioModel",
        tableName: "tbl_usuario",
        timestamps: false,
    }
)