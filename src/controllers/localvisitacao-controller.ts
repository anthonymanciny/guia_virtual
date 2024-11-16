import { Request, Response } from 'express'
import { LocalVisitacaoService } from '../services/localvisitacao-service';

export class LocalVisitacaoController {
    private localvisitacaoService: LocalVisitacaoService;

    constructor() {
        this.localvisitacaoService = new LocalVisitacaoService();
    }
    
    public async criar(req: Request, res: Response) {
    
        if (Object.keys(req.body).length===0) {
            res.status(400).json({ message: 'O corpo da requisição está vazio'});
            return;
        }
    
        try {
            await this.localvisitacaoService.criar(req.body);
            res.status(201).json( { message: 'Local criado com sucesso'});
        } catch (erro: any) {
            res.status(500).json(erro.message);
        }
    }

    public async buscar(req: Request, res: Response) {
    
        if (!req.params.id) {
            res.status(400).json({ message: 'Parâmetro de busca não informado'});
            return;
        }
    
        const id = parseInt(req.params.id);
    
        try {
            const local = await this.localvisitacaoService.buscar(id);
            res.status(200).json(local);
        } catch (erro: any) {
            res.status(500).json(erro.message);
        }
    }

    public async listar(req: Request, res: Response) {
        try {
            const locais = await this.localvisitacaoService.listar();
            res.status(200).json({locais});
        } catch (erro: any) {
            res.status(500).json(erro.message);
        }
    }

    public async alterar(req: Request, res: Response) {
    
        if (!req.params.id) {
            res.status(400).json({message: 'Parâmetro de busca não encontrado'});
            return;
        }
    
        if (Object.keys(req.body).length===0) {
            res.status(400).json({ message: 'O corpo da requisição não foi informado'});
            return;
        }
    
        const id = parseInt(req.params.id);
    
        try {
            await this.localvisitacaoService.alterar(id, req.body);
            res.status(200).json({ message: 'Item alterado com sucesso'});
        } catch (erro: any) {
            res.status(500).json({message: erro.message});
        }
    }

    public async excluir(req: Request, res: Response) {
    
        if (!req.params.id) {
            res.status(400).json({ message: 'Parametro de busca não informado'});
            return;
        }
    
        const id = parseInt(req.params.id);
    
        try {
            await this.localvisitacaoService.delete(id);
            res.status(200).json({ message: 'Item excluído com sucesso'});
        } catch (erro: any) {
            res.status(500).json({message: erro.message});
        }
    }

}