export interface DadosSaldo {
    saldoTotal: number;
    debito: number;
    credito: number;
}

export interface CartaoSaldo {
    titulo: string;
    valor: number;
    tendencia: string;
    periodo: string;
    ehPositivo: boolean;
}