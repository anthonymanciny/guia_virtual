import { IUsuario } from "../interface/usuario-interface";
import { UsuarioModel} from "../models/usuario-model";


export class UsuarioService {
    constructor(){}


    public async criar(novo_item: IUsuario) {
        try {
            await UsuarioModel.create({
                nomeUsuario: novo_item.nomeUsuario,
                emailUsuario: novo_item.emailUsuario,
                senhaUsuario: novo_item.senhaUsuario
            });
        } catch (erro: any) {
            throw new Error("Erro ao tentar incluir um novo usuario [" + erro.message + "]")
        }
    }

    public async listar() {
        try {
            const usuarios: UsuarioModel[]  =   await UsuarioModel.findAll();
            return usuarios;
        } catch (erro: any) {
            throw new Error("Erro ao tentar listar usuarios [" + erro.message + "]");
        }
    }

    public async buscar(id: number): Promise<UsuarioModel> {
        try {
            const usuario = <UsuarioModel> await UsuarioModel.findByPk(id);
            return usuario;
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async alterar(id: number, item: IUsuario ) {
        try {
            const usuario : UsuarioModel = await this.buscar(id);
            if (usuario) {
                usuario.nomeUsuario = item.nomeUsuario;
                usuario.emailUsuario = item.emailUsuario;
                usuario.senhaUsuario = item.senhaUsuario;
                usuario.save();
            } else {
                throw new Error('Usuário não encontrado');
            }
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async delete(id: number) {
        try {
            const usuario : UsuarioModel = await this.buscar(id);
            if (usuario) {
                usuario.destroy();
            } else {
                throw new Error('Usuário não encontrado');
            }
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }


}