import { Request, Response } from 'express';
import { PontoVisitacaoService } from '../services/pontovisitacao-service';

export class PontoVisitacaoController {
    private pontovisitacaoService: PontoVisitacaoService;

    constructor() {
        this.pontovisitacaoService = new PontoVisitacaoService();
    }
    
    public async criar(req: Request, res: Response) {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'O corpo da requisição está vazio' });
        }

        try {
            // Passar os arquivos do request para o serviço
            await this.pontovisitacaoService.criar(req.body, req.files);
            res.status(201).json({ message: 'Ponto criado com sucesso' });
        } catch (erro: any) {
            res.status(500).json(erro.message);
        }
    }

    public async buscar(req: Request, res: Response) {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Parâmetro de busca não informado' });
        }

        const id = parseInt(req.params.id);

        try {
            const ponto = await this.pontovisitacaoService.buscar(id);
            if (!ponto) {
                return res.status(404).json({ message: 'Ponto não encontrado' });
            }
            res.status(200).json(ponto);
        } catch (erro: any) {
            res.status(500).json(erro.message);
        }
    }

    public async buscarPorIdLocalVisitacao(req: Request, res: Response) {
        if (!req.params.idLocalVisitacao) {
            return res.status(400).json({ message: 'Parâmetro de busca não informado' });
        }

        const idLocalVisitacao = parseInt(req.params.idLocalVisitacao);

        if (isNaN(idLocalVisitacao)) {
            return res.status(400).json({ message: 'Parâmetro de busca inválido' });
        }

        try {
            const pontos = await this.pontovisitacaoService.buscarPorIdLocalVisitacao(idLocalVisitacao);

            if (!pontos || pontos.length === 0) {
                return res.status(404).json({ message: 'Nenhum ponto de visitação encontrado' });
            }

            res.status(200).json(pontos);
        } catch (erro: any) {
            res.status(500).json({ message: erro.message });
        }
    }

    public async listar(req: Request, res: Response) {
        try {
            const pontos = await this.pontovisitacaoService.listar();
            res.status(200).json({ pontos });
        } catch (erro: any) {
            res.status(500).json(erro.message);
        }
    }

    public async alterar(req: Request, res: Response) {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Parâmetro de busca não encontrado' });
        }

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'O corpo da requisição não foi informado' });
        }

        const id = parseInt(req.params.id);

        try {
            await this.pontovisitacaoService.alterar(id, req.body);
            res.status(200).json({ message: 'Ponto alterado com sucesso' });
        } catch (erro: any) {
            res.status(500).json({ message: erro.message });
        }
    }

    public async excluir(req: Request, res: Response) {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Parâmetro de busca não informado' });
        }

        const id = parseInt(req.params.id);

        try {
            await this.pontovisitacaoService.delete(id);
            res.status(200).json({ message: 'Ponto excluído com sucesso' });
        } catch (erro: any) {
            res.status(500).json({ message: erro.message });
        }
    }
}
