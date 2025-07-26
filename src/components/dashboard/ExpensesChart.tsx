"use client";

import { Card } from "@/components/ui/card";

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
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-32 h-32 rounded-full relative overflow-hidden">
                <svg className="w-full h-full transform -rotate-90">
                    {categories.map((category, index) => {
                        const percentage = category.value;
                        const circumference = 2 * Math.PI * 45;
                        const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                        const strokeDashoffset = index === 0 ? 0 : -categories.slice(0, index).reduce((acc, cat) => acc + (cat.value / 100) * circumference, 0);
                        
                        return (
                            <circle
                                key={index}
                                cx="64"
                                cy="64"
                                r="45"
                                stroke={category.color}
                                strokeWidth="12"
                                fill="transparent"
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-300"
                            />
                        );
                    })}
                </svg>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm text-gray-400">Total</span>
                <span className="text-xl font-bold text-white">R${total}</span>
            </div>
        </div>
    );
}

export default function ExpensesChart({ data }: ExpensesChartProps) {
    return (
        <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Despesas</h3>
                <select className="bg-gray-700 border-gray-600 text-white text-sm rounded px-3 py-1">
                    <option>Mensal</option>
                    <option>Semanal</option>
                    <option>Anual</option>
                </select>
            </div>
            
            <div className="flex items-center justify-center mb-6">
                <DonutChart categories={data.categories} total={data.total} />
            </div>
            
            <div className="space-y-3">
                {data.categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div 
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: category.color }}
                            />
                            <span className="text-gray-300 text-sm">{category.name}</span>
                        </div>
                        <span className="text-white font-medium">{category.value}%</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}