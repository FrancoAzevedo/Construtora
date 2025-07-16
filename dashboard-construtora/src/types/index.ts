export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface Company {
  id: string;
  name: string;
  cnpj: string;
  logo?: string;
}

export interface CashFlowData {
  date: string;
  saldoAnterior: number;
  aReceber: number;
  aPagar: number;
  saldoPeriodo: number;
  saldoFinal: number;
  empresa: string;
}

export interface AccountBalance {
  id: string;
  account: string;
  balance: number;
  type: 'ativo' | 'passivo' | 'receita' | 'despesa';
  empresa: string;
}

export interface ExpenseRevenueData {
  planoConta: string;
  receitas: number;
  despesas: number;
  empresa: string;
}

export interface CostCenterData {
  centroCusto: string;
  valor: number;
  tipo: 'receita' | 'despesa';
  empresa: string;
}

export interface ChartPeriodFilter {
  type: '12months' | '6months' | 'specific';
  specificMonth?: string;
  specificYear?: string;
}

export interface FinancialMetrics {
  totalReceitas: number;
  totalDespesas: number;
  resultado: number;
  crescimentoMensal: number;
  empresa: string;
}