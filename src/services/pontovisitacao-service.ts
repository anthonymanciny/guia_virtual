import { IPontoVisitacao } from "../interface/pontovisitacao-interface";
import { PontoVisitacaoModel } from "../models/ponto-model";

export class PontoVisitacaoService {
    constructor() {}

    public async criar(novo_item: IPontoVisitacao) {
        try {
            await PontoVisitacaoModel.create({
                idLocalVisitacao: novo_item.idLocalVisitacao,
                nome: novo_item.nome,
                imagem: novo_item.imagem,
                audio: novo_item.audio,
                texto: novo_item.texto
            });
        } catch (erro: any) {
            throw new Error("Erro ao tentar incluir um novo ponto [" + erro.message + "]");
        }
    }

    public async listar() {
        try {
            const pontos: PontoVisitacaoModel[] = await PontoVisitacaoModel.findAll();
            return pontos;
        } catch (erro: any) {
            throw new Error("Erro ao tentar listar pontos [" + erro.message + "]");
        }
    }

    public async buscar(id: number): Promise<PontoVisitacaoModel> {
        try {
            const ponto = <PontoVisitacaoModel>await PontoVisitacaoModel.findByPk(id);
            return ponto;
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async alterar(id: number, item: IPontoVisitacao) {
        try {
            const ponto: PontoVisitacaoModel = await this.buscar(id);
            if (ponto) {
                ponto.idLocalVisitacao = item.idLocalVisitacao;
                ponto.nome = item.nome;
                ponto.imagem = item.imagem;
                ponto.audio = item.audio;
                ponto.texto = item.texto;
                await ponto.save();
            } else {
                throw new Error('Ponto não encontrado');
            }
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async delete(id: number) {
        try {
            const ponto: PontoVisitacaoModel = await this.buscar(id);
            if (ponto) {
                await ponto.destroy();
            } else {
                throw new Error('Ponto não encontrado');
            }
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }
}
