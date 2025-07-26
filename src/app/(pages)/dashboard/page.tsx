"use client";

import LayoutWrapper from "@/components/(layout)/layout";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Filter, Search, MoreVertical, ArrowRightLeft, FileText } from "lucide-react";

const mockData = {
    balance: {
        installment: 5412,
        investment: 6524,
        property: 6325,
        balance: 14251.00
    },
    walletBalance: 824571.93,
    mainBalance: 635652.00,
    cardHolder: "Leslie Alexander",
    cardNumber: "**** **** **** 123",
    latestTransactions: [
        {
            id: 1,
            name: "Floyd Miles",
            date: "8 Nov 4:25 PM",
            amount: 4744,
            card: "MasterCard 404",
            status: "In Process",
            avatar: "FM"
        },
        {
            id: 2,
            name: "Jane Cooper",
            date: "10 Nov 7:41 PM",
            amount: 7147,
            card: "MasterCard 404",
            status: "Completed",
            avatar: "JC"
        },
        {
            id: 3,
            name: "Ralph Edwards",
            date: "11 Nov 5:25 PM",
            amount: 4448,
            card: "MasterCard 404",
            status: "In Process",
            avatar: "RE"
        }
    ],
    invoicesSent: [
        {
            id: 1,
            name: "Kathryn Murphy",
            role: "Head Manager",
            amount: 511,
            avatar: "KM"
        },
        {
            id: 2,
            name: "Eleanor Pena",
            role: "Programmer",
            amount: 525,
            avatar: "EP"
        },
        {
            id: 3,
            name: "Kristin Watson",
            role: "Graphic Designers",
            amount: 741,
            avatar: "KW"
        },
        {
            id: 4,
            name: "Floyd Miles",
            role: "UI Designer",
            amount: 524,
            avatar: "FM"
        }
    ]
};

function CircularProgress({ percentage, color }: { percentage: number; color: string }) {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
        <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="transparent"
                    className="opacity-30"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={color}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                />
            </svg>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <LayoutWrapper>
            <div className="space-y-4 lg:space-y-8 p-4 lg:p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-gray-900">Balance</h1>
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Filter</span>
                    </div>
                </div>

                {/* Cards circulares superiores */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Installment</p>
                                <p className="text-lg font-semibold">${mockData.balance.installment.toLocaleString('en-US')}</p>
                            </div>
                            <CircularProgress percentage={65} color="#6366f1" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Investment</p>
                                <p className="text-lg font-semibold">${mockData.balance.investment.toLocaleString('en-US')}</p>
                            </div>
                            <CircularProgress percentage={78} color="#8b5cf6" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Property</p>
                                <p className="text-lg font-semibold">${mockData.balance.property.toLocaleString('en-US')}</p>
                            </div>
                            <CircularProgress percentage={85} color="#ec4899" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Balance</p>
                                <p className="text-lg font-semibold">${mockData.balance.balance.toLocaleString('en-US')}</p>
                            </div>
                            <CircularProgress percentage={92} color="#06b6d4" />
                        </div>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                    {/* Wallet Balance e Main Balance */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                            <Card className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-sm text-gray-600">Wallet Balance</p>
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-3xl font-bold mb-6">${mockData.walletBalance.toLocaleString('en-US')}</p>
                                <div className="space-y-3">
                                    <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800">
                                        <ArrowRightLeft className="h-4 w-4" />
                                        Transfer
                                    </button>
                                    <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200">
                                        <FileText className="h-4 w-4" />
                                        Send Invoices
                                    </button>
                                </div>
                            </Card>

                            <Card className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-sm text-gray-600">Main Balance</p>
                                    <MoreVertical className="h-4 w-4 text-gray-400" />
                                </div>
                                <p className="text-3xl font-bold mb-6">${mockData.mainBalance.toLocaleString('en-US')}</p>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Main Balance</span>
                                        <span className="text-gray-600">Card Holder</span>
                                        <span className="text-gray-600">Number</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>${mockData.mainBalance.toLocaleString('en-US')}</span>
                                        <span>{mockData.cardHolder}</span>
                                        <span>{mockData.cardNumber}</span>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Latest Transaction */}
                        <Card className="p-4 lg:p-6">
                            <div className="flex items-center justify-between mb-4 lg:mb-6">
                                <div>
                                    <h3 className="text-base lg:text-lg font-semibold">Latest Transaction</h3>
                                    <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">Your Most Recent Activity</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Search className="h-4 w-4 text-gray-400" />
                                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 lg:space-y-4">
                                {mockData.latestTransactions.map((transaction) => (
                                    <div key={transaction.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 min-w-0 flex-1">
                                            <Avatar className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
                                                <AvatarFallback className="bg-gray-200 text-gray-700 text-xs lg:text-sm font-medium">
                                                    {transaction.avatar}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-medium text-sm lg:text-base truncate">{transaction.name}</p>
                                                <p className="text-xs lg:text-sm text-gray-600">{transaction.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 lg:gap-4 flex-shrink-0">
                                            <span className="font-semibold text-xs lg:text-base">+${transaction.amount.toLocaleString('en-US')}</span>
                                            <span className="text-xs lg:text-sm text-gray-600 hidden md:inline">{transaction.card}</span>
                                            <div className={`px-1.5 lg:px-2 py-1 rounded-full text-xs font-medium ${
                                                transaction.status === 'Completed' 
                                                    ? 'bg-green-100 text-green-700' 
                                                    : 'bg-orange-100 text-orange-700'
                                            }`}>
                                                <span className="hidden sm:inline">{transaction.status}</span>
                                                <span className="sm:hidden">{transaction.status === 'Completed' ? '✓' : '⏳'}</span>
                                            </div>
                                            <MoreVertical className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Invoices Sent */}
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold">Invoices Sent</h3>
                                <p className="text-sm text-gray-600">You have 245 clients</p>
                            </div>
                            <MoreVertical className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="space-y-4">
                            {mockData.invoicesSent.map((invoice) => (
                                <div key={invoice.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-10 h-10">
                                            <AvatarFallback className={`text-white text-sm font-medium ${
                                                invoice.id === 1 ? 'bg-green-500' :
                                                invoice.id === 2 ? 'bg-blue-500' :
                                                invoice.id === 3 ? 'bg-red-500' : 'bg-purple-500'
                                            }`}>
                                                {invoice.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium text-sm">{invoice.name}</p>
                                            <p className="text-xs text-gray-600">{invoice.role}</p>
                                        </div>
                                    </div>
                                    <span className="font-semibold">${invoice.amount}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </LayoutWrapper>
    );
}
