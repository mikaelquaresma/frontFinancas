import { Transacao, TipoFiltroTransacao, DadosRelatorioTransacao } from '../entidades/Transacao';

export interface IRepositorioTransacao {
    obterTransacoes(): Promise<Transacao[]>;
    filtrarTransacoes(transacoes: Transacao[], filtro: TipoFiltroTransacao): Transacao[];
    obterRelatorioTransacoes(): Promise<DadosRelatorioTransacao>;
}