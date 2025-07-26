import { Transacao, TipoFiltroTransacao, DadosRelatorioTransacao } from '../../../dominio/entidades/Transacao';
import { IRepositorioTransacao } from '../../../dominio/repositorios/IRepositorioTransacao';

export class RepositorioTransacaoMock implements IRepositorioTransacao {
    private transacoesMock: Transacao[] = [
        {
            id: 1,
            servico: "Plano Figma Pro",
            conta: "Figma",
            valor: -5000,
            data: "2025-07-26",
            status: "sucesso",
            tempo: "5 min atras",
            avatar: "FP"
        },
        {
            id: 2,
            servico: "Plano Youtube Pro",
            conta: "Youtube",
            valor: -2500,
            data: "2025-07-26",
            status: "pendente",
            tempo: "7 min atras",
            avatar: "YT"
        },
        // Adicione mais transações conforme necessário
    ];

    private relatorioMock: DadosRelatorioTransacao = {
        valorAtual: 750,
        dados: [
            { mes: 'Jan', valor: 300 },
            { mes: 'Fev', valor: 400 },
            { mes: 'Mar', valor: 350 },
            // Adicione mais dados conforme necessário
        ]
    };

    async obterTransacoes(): Promise<Transacao[]> {
        return Promise.resolve(this.transacoesMock);
    }

    filtrarTransacoes(transacoes: Transacao[], filtro: TipoFiltroTransacao): Transacao[] {
        const hoje = new Date();
        const hojeStr = hoje.toISOString().split('T')[0];
        
        switch (filtro) {
            case 'hoje':
                return transacoes.filter(t => t.data === hojeStr);
            case 'esta-semana':
                const semanaAtras = new Date();
                semanaAtras.setDate(hoje.getDate() - 7);
                const semanaAtrasStr = semanaAtras.toISOString().split('T')[0];
                return transacoes.filter(t => t.data >= semanaAtrasStr && t.data <= hojeStr);
            case 'este-ano':
                const anoAtual = hoje.getFullYear().toString();
                return transacoes.filter(t => t.data.startsWith(anoAtual));
            default:
                return transacoes;
        }
    }

    async obterRelatorioTransacoes(): Promise<DadosRelatorioTransacao> {
        return Promise.resolve(this.relatorioMock);
    }
}