"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TransactionReportsData {
    currentValue: number;
    data: { month: string; value: number }[];
}

interface TransactionReportsProps {
    data: TransactionReportsData;
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-2 shadow-lg">
                <p className="text-white text-sm">{`${label}: R$${payload[0].value}k`}</p>
            </div>
        );
    }
    return null;
};

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
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis 
                            dataKey="month" 
                            stroke="#9CA3AF"
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis 
                            stroke="#9CA3AF"
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => `${value}k`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#3B82F6" 
                            strokeWidth={2}
                            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}