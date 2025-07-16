'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CashFlowData, Company } from '@/types';

interface FinancialTrendsChartProps {
  data: CashFlowData[];
  selectedCompany: Company;
}

export default function FinancialTrendsChart({ data, selectedCompany }: FinancialTrendsChartProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const filteredData = data.filter(item => item.empresa === selectedCompany.name);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Evolução dos Indicadores Financeiros</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(value) => {
              const date = new Date(value + '-01');
              return date.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' });
            }}
          />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip 
            formatter={(value) => formatCurrency(value as number)}
            labelFormatter={(label) => {
              const date = new Date(label + '-01');
              return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="aReceber" 
            stroke="#10B981" 
            strokeWidth={2}
            name="A Receber"
            dot={{ fill: '#10B981' }}
          />
          <Line 
            type="monotone" 
            dataKey="aPagar" 
            stroke="#EF4444" 
            strokeWidth={2}
            name="A Pagar"
            dot={{ fill: '#EF4444' }}
          />
          <Line 
            type="monotone" 
            dataKey="saldoFinal" 
            stroke="#3B82F6" 
            strokeWidth={3}
            name="Saldo Final"
            dot={{ fill: '#3B82F6' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}