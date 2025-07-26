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

interface ExpenseCategory {
    name: string;
    value: number;
    color: string;
}

interface ExpensesData {
    total: number;
    categories: ExpenseCategory[];
}

interface ExpensesChartProps {
    data: ExpensesData;
}

function DonutChart({ categories, total }: { categories: ExpenseCategory[]; total: number }) {
    const radius = 60;
    const strokeWidth = 12;
    const size = (radius + strokeWidth) * 2 + 16;
    const center = size / 2;
    
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full relative overflow-hidden">
                <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
                    {categories.map((category, index) => {
                        const percentage = category.value;
                        const circumference = 2 * Math.PI * radius;
                        const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                        const strokeDashoffset = index === 0 ? 0 : -categories.slice(0, index).reduce((acc, cat) => acc + (cat.value / 100) * circumference, 0);
                        
                        return (
                            <circle
                                key={index}
                                cx={center}
                                cy={center}
                                r={radius}
                                stroke={category.color}
                                strokeWidth={strokeWidth}
                                fill="transparent"
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-500 hover:opacity-80"
                                strokeLinecap="round"
                            />
                        );
                    })}
                </svg>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs text-gray-400 mb-1">Total</span>
                <span className="text-base sm:text-lg font-bold text-white">R${total}</span>
            </div>
        </div>
    );
}

export default function ExpensesChart({ data }: ExpensesChartProps) {
    const [filter, setFilter] = useState('mensal');

    return (
        <Card className="bg-gray-800 border-gray-700 p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-white">Despesas</h3>
                <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-full sm:w-[120px] bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="mensal" className="text-white hover:bg-gray-600">Mensal</SelectItem>
                        <SelectItem value="semanal" className="text-white hover:bg-gray-600">Semanal</SelectItem>
                        <SelectItem value="anual" className="text-white hover:bg-gray-600">Anual</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
                <div className="sm:col-span-2 flex justify-center">
                    <DonutChart categories={data.categories} total={data.total} />
                </div>
                
                <div className="sm:col-span-3 space-y-2">
                    {data.categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between group hover:bg-gray-700/30 rounded-lg p-2 transition-colors">
                            <div className="flex items-center gap-2">
                                <div 
                                    className="w-3 h-3 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: category.color }}
                                />
                                <span className="text-gray-300 text-sm">{category.name}</span>
                            </div>
                            <span className="text-white font-medium text-sm">{category.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}