import { IPontoVisitacao } from "../interface/pontovisitacao-interface";
import { PontoVisitacaoModel } from "../models/ponto-model";
import path from 'path';

export class PontoVisitacaoService {
    constructor() {}

    public async criar(novo_item: IPontoVisitacao, files: any) {
        try {
          // Verifique se os arquivos foram recebidos
          let imagem = '';
          let audio = '';
      
          if (files && files.image && files.image[0]) {
            // Salva o arquivo de imagem e retorna o caminho
            imagem = path.join(__dirname, './uploads/image');
          }
      
          if (files && files.audio && files.audio[0]) {
            // Salva o arquivo de áudio e retorna o caminho
            audio = path.join(__dirname, './uploads/audio');
          }
      
          // Criação do novo item no banco de dados
          await PontoVisitacaoModel.create({
            idLocalVisitacao: novo_item.idLocalVisitacao,
            nome: novo_item.nome,
            imagem: imagem, // Caminho da imagem no servidor
            audio: audio,   // Caminho do áudio no servidor
            texto: novo_item.texto,
          });
      
          return { message: 'Ponto de visitação criado com sucesso!' };
        } catch (erro: any) {
          throw new Error('Erro ao tentar incluir um novo ponto [' + erro.message + ']');
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

    public async buscarPorIdLocalVisitacao(idLocalVisitacao: number): Promise<PontoVisitacaoModel[]> {
        try {
          const pontos = await PontoVisitacaoModel.findAll({ where: { idLocalVisitacao } });
          return pontos as PontoVisitacaoModel[];
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
