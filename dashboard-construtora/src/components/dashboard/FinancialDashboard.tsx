'use client';

import { useState, useMemo } from 'react';
import { 
  Calendar, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  CashFlowData, 
  AccountBalance, 
  ExpenseRevenueData, 
  CostCenterData, 
  FinancialMetrics, 
  ChartPeriodFilter,
  Company
} from '@/types';
import FinancialTrendsChart from './FinancialTrendsChart';

interface FinancialDashboardProps {
  cashFlowData: CashFlowData[];
  accountBalances: AccountBalance[];
  expenseRevenueData: ExpenseRevenueData[];
  costCenterData: CostCenterData[];
  financialMetrics: FinancialMetrics[];
  selectedCompany: Company;
}

export default function FinancialDashboard({
  cashFlowData,
  accountBalances,
  expenseRevenueData,
  costCenterData,
  financialMetrics,
  selectedCompany
}: FinancialDashboardProps) {
  const [periodFilter, setPeriodFilter] = useState<ChartPeriodFilter>({ type: '12months' });
  const [selectedMonth, setSelectedMonth] = useState('2024-01');

  // Filtrar dados pela empresa selecionada
  const filteredCashFlowData = useMemo(() => {
    return cashFlowData.filter(data => data.empresa === selectedCompany.name);
  }, [cashFlowData, selectedCompany]);

  const filteredAccountBalances = useMemo(() => {
    return accountBalances.filter(data => data.empresa === selectedCompany.name);
  }, [accountBalances, selectedCompany]);

  const filteredExpenseRevenueData = useMemo(() => {
    return expenseRevenueData.filter(data => data.empresa === selectedCompany.name);
  }, [expenseRevenueData, selectedCompany]);

  const filteredCostCenterData = useMemo(() => {
    return costCenterData.filter(data => data.empresa === selectedCompany.name);
  }, [costCenterData, selectedCompany]);

  const currentMetrics = useMemo(() => {
    return financialMetrics.find(metric => metric.empresa === selectedCompany.name);
  }, [financialMetrics, selectedCompany]);

  // Processar dados de fluxo de caixa baseado no filtro
  const processedCashFlowData = useMemo(() => {
    let data = filteredCashFlowData;
    
    if (periodFilter.type === '6months') {
      data = data.slice(0, 6);
    } else if (periodFilter.type === 'specific') {
      // Para mês específico, simular dados diários
      const month = selectedMonth;
      const daysInMonth = new Date(2024, parseInt(month.split('-')[1]), 0).getDate();
      data = Array.from({ length: daysInMonth }, (_, i) => ({
        date: `${month}-${String(i + 1).padStart(2, '0')}`,
        saldoAnterior: 500000 + (i * 10000),
        aReceber: 30000 + (Math.random() * 20000),
        aPagar: 25000 + (Math.random() * 15000),
        saldoPeriodo: 5000 + (Math.random() * 10000),
        saldoFinal: 505000 + (i * 10000),
        empresa: selectedCompany.name
      }));
    }
    
    return data;
  }, [filteredCashFlowData, periodFilter, selectedMonth, selectedCompany]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const COLORS = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#F97316'];

  return (
    <div className="space-y-6">
      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Receitas</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(currentMetrics?.totalReceitas || 0)}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">
              +{currentMetrics?.crescimentoMensal || 0}%
            </span>
            <span className="text-sm text-gray-500 ml-1">vs mês anterior</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Despesas</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(currentMetrics?.totalDespesas || 0)}
              </p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <ArrowDownRight className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600 ml-1">
              +{((currentMetrics?.crescimentoMensal || 0) * 0.7).toFixed(1)}%
            </span>
            <span className="text-sm text-gray-500 ml-1">vs mês anterior</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resultado</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(currentMetrics?.resultado || 0)}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">
              +{((currentMetrics?.crescimentoMensal || 0) * 1.2).toFixed(1)}%
            </span>
            <span className="text-sm text-gray-500 ml-1">vs mês anterior</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Margem</p>
              <p className="text-2xl font-bold text-gray-900">
                {((currentMetrics?.resultado || 0) / (currentMetrics?.totalReceitas || 1) * 100).toFixed(1)}%
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+2.3%</span>
            <span className="text-sm text-gray-500 ml-1">vs mês anterior</span>
          </div>
        </div>
      </div>

      {/* Gráfico de Fluxo de Caixa */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Fluxo de Caixa</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={periodFilter.type}
                onChange={(e) => setPeriodFilter({ type: e.target.value as ChartPeriodFilter['type'] })}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
              >
                <option value="12months">Próximos 12 meses</option>
                <option value="6months">Próximos 6 meses</option>
                <option value="specific">Mês específico</option>
              </select>
            </div>
            {periodFilter.type === 'specific' && (
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <input
                  type="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                />
              </div>
            )}
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={processedCashFlowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => formatCurrency(value)} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Bar dataKey="saldoAnterior" fill="#8884d8" name="Saldo Anterior" />
            <Bar dataKey="aReceber" fill="#82ca9d" name="A Receber" />
            <Bar dataKey="aPagar" fill="#ffc658" name="A Pagar" />
            <Bar dataKey="saldoPeriodo" fill="#ff7300" name="Saldo do Período" />
            <Bar dataKey="saldoFinal" fill="#8dd1e1" name="Saldo Final" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Evolução dos Indicadores */}
      <FinancialTrendsChart 
        data={filteredCashFlowData} 
        selectedCompany={selectedCompany} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Receitas e Despesas por Plano de Contas */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Receitas e Despesas por Plano de Contas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredExpenseRevenueData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => formatCurrency(value)} />
              <YAxis dataKey="planoConta" type="category" width={120} />
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Bar dataKey="receitas" fill="#10B981" name="Receitas" />
              <Bar dataKey="despesas" fill="#EF4444" name="Despesas" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico por Centro de Custo */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Custos por Centro de Custo</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={filteredCostCenterData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ centroCusto, percent }) => `${centroCusto} (${((percent || 0) * 100).toFixed(0)}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="valor"
              >
                {filteredCostCenterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Lista de Saldos das Contas */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Saldos das Contas</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conta
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Saldo
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAccountBalances.map((account) => (
                <tr key={account.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {account.account}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      account.type === 'ativo' ? 'bg-green-100 text-green-800' :
                      account.type === 'passivo' ? 'bg-red-100 text-red-800' :
                      account.type === 'receita' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {account.type.charAt(0).toUpperCase() + account.type.slice(1)}
                    </span>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium ${
                    account.balance >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formatCurrency(account.balance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}