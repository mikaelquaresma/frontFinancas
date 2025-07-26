export interface Transacao {
    id: number;
    servico: string;
    conta: string;
    valor: number;
    data: string;
    status: 'sucesso' | 'pendente';
    tempo: string;
    avatar: string;
}

export type TipoFiltroTransacao = 'hoje' | 'esta-semana' | 'este-ano';

export interface DadosRelatorioTransacao {
    valorAtual: number;
    dados: { mes: string; valor: number }[];
}