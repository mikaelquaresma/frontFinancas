export interface CategoriaDespesa {
    nome: string;
    valor: number;
    cor: string;
}

export interface DadosDespesas {
    total: number;
    categorias: CategoriaDespesa[];
}