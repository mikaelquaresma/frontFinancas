import { Transacao, TipoFiltroTransacao } from '../../dominio/entidades/Transacao';
import { IRepositorioTransacao } from '../../dominio/repositorios/IRepositorioTransacao';

export class ObterTransacoesUseCase {
    constructor(private repositorioTransacao: IRepositorioTransacao) {}

    async executar(filtro?: TipoFiltroTransacao): Promise<Transacao[]> {
        const transacoes = await this.repositorioTransacao.obterTransacoes();
        
        if (filtro) {
            return this.repositorioTransacao.filtrarTransacoes(transacoes, filtro);
        }
        
        return transacoes;
    }
}