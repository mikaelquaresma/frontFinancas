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
    const radius = 70;
    const strokeWidth = 16;
    const size = (radius + strokeWidth) * 2 + 20; // Adding padding
    const center = size / 2;
    
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full relative overflow-hidden">
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
                <span className="text-xs sm:text-sm text-gray-400 mb-1">Total</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">R${total}</span>
            </div>
        </div>
    );
}

export default function ExpensesChart({ data }: ExpensesChartProps) {
    return (
        <Card className="bg-gray-800 border-gray-700 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h3 className="text-base sm:text-lg font-semibold text-white">Despesas</h3>
                <select className="bg-gray-700 border-gray-600 text-white text-sm rounded px-3 py-1 w-full sm:w-auto">
                    <option>Mensal</option>
                    <option>Semanal</option>
                    <option>Anual</option>
                </select>
            </div>
            
            <div className="flex items-center justify-center mb-6 sm:mb-8">
                <DonutChart categories={data.categories} total={data.total} />
            </div>
            
            <div className="space-y-3 sm:space-y-4">
                {data.categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between group hover:bg-gray-700/30 rounded-lg p-2 transition-colors">
                        <div className="flex items-center gap-3">
                            <div 
                                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0"
                                style={{ backgroundColor: category.color }}
                            />
                            <span className="text-gray-300 text-sm sm:text-base">{category.name}</span>
                        </div>
                        <span className="text-white font-medium text-sm sm:text-base">{category.value}%</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}