"use client";

import { useState } from "react";
import { Card } from "@/compartilhado/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/compartilhado/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from "@/compartilhado/contextos/ThemeContext";

interface TransactionReportsData {
    currentValue: number;
    data: { month: string; value: number }[];
}

interface TransactionReportsProps {
    data: TransactionReportsData;
}

interface TooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        dataKey?: string;
        color?: string;
        name?: string;
        payload?: Record<string, unknown>;
    }>;
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
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
    const [filter, setFilter] = useState('mensal');
    const { theme } = useTheme();

    return (
        <Card className={`p-4 ${
            theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200 shadow-sm'
        }`}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className={`text-lg font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Relatorios de Transacoes</h3>
                    <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>Grafico de relatorios de transacoes</p>
                </div>
                <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className={`w-[120px] ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className={`${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600' 
                            : 'bg-white border-gray-200'
                    }`}>
                        <SelectItem value="mensal" className={`${
                            theme === 'dark' 
                                ? 'text-white hover:bg-gray-600' 
                                : 'text-gray-900 hover:bg-gray-100'
                        }`}>Mensal</SelectItem>
                        <SelectItem value="semanal" className={`${
                            theme === 'dark' 
                                ? 'text-white hover:bg-gray-600' 
                                : 'text-gray-900 hover:bg-gray-100'
                        }`}>Semanal</SelectItem>
                        <SelectItem value="anual" className={`${
                            theme === 'dark' 
                                ? 'text-white hover:bg-gray-600' 
                                : 'text-gray-900 hover:bg-gray-100'
                        }`}>Anual</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="mb-3">
                <span className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>R${data.currentValue}k</span>
            </div>
            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.data}>
                        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} />
                        <XAxis 
                            dataKey="month" 
                            stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'}
                            tick={{ fontSize: 12, fill: theme === 'dark' ? '#9CA3AF' : '#6B7280' }}
                        />
                        <YAxis 
                            stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'}
                            tick={{ fontSize: 12, fill: theme === 'dark' ? '#9CA3AF' : '#6B7280' }}
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