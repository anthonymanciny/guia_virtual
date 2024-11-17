export interface IPontoVisitacao {
    idPontoVisitacao: number;
    idLocalVisitacao: number;
    nome: string;
    imagem?: Buffer; 
    audio?: Buffer;  
    texto?: string;  
}
