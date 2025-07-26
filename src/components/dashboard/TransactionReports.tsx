"use client";

import { Card } from "@/components/ui/card";

interface TransactionReportsData {
    currentValue: number;
    data: number[];
}

interface TransactionReportsProps {
    data: TransactionReportsData;
}

function BarChart({ data, highlight }: { data: number[]; highlight: number }) {
    const maxValue = Math.max(...data);
    
    return (
        <div className="flex items-end justify-between h-32 gap-1">
            {data.map((value, index) => (
                <div key={index} className="flex flex-col items-center gap-1 flex-1">
                    <div 
                        className={`w-full rounded-t transition-all duration-300 ${
                            value === highlight ? 'bg-blue-500' : 'bg-gray-600'
                        }`}
                        style={{ height: `${(value / maxValue) * 100}%` }}
                    />
                    <span className="text-xs text-gray-400">
                        {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][index]}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function TransactionReports({ data }: TransactionReportsProps) {
    return (
        <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-white">Relatorios de Transacoes</h3>
                    <p className="text-sm text-gray-400">Grafico de relatorios de transacoes</p>
                </div>
                <select className="bg-gray-700 border-gray-600 text-white text-sm rounded px-3 py-1">
                    <option>Mensal</option>
                    <option>Semanal</option>
                    <option>Anual</option>
                </select>
            </div>
            <div className="mb-4">
                <span className="text-2xl font-bold text-white">R${data.currentValue}k</span>
            </div>
            <BarChart data={data.data} highlight={data.currentValue} />
        </Card>
    );
}