import { 
  User, 
  Company, 
  CashFlowData, 
  AccountBalance, 
  ExpenseRevenueData, 
  CostCenterData, 
  FinancialMetrics 
} from '@/types';

export const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao@construtora.com',
  role: 'Administrador',
  avatar: '/api/placeholder/40/40'
};

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Construtora ABC Ltda',
    cnpj: '12.345.678/0001-90',
    logo: '/api/placeholder/150/60'
  },
  {
    id: '2',
    name: 'Incorporadora XYZ S.A.',
    cnpj: '98.765.432/0001-01',
    logo: '/api/placeholder/150/60'
  }
];

export const mockCashFlowData: CashFlowData[] = [
  // Dados para próximos 12 meses
  { date: '2024-01', saldoAnterior: 500000, aReceber: 800000, aPagar: 600000, saldoPeriodo: 200000, saldoFinal: 700000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-02', saldoAnterior: 700000, aReceber: 900000, aPagar: 700000, saldoPeriodo: 200000, saldoFinal: 900000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-03', saldoAnterior: 900000, aReceber: 1200000, aPagar: 800000, saldoPeriodo: 400000, saldoFinal: 1300000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-04', saldoAnterior: 1300000, aReceber: 1100000, aPagar: 900000, saldoPeriodo: 200000, saldoFinal: 1500000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-05', saldoAnterior: 1500000, aReceber: 1300000, aPagar: 1100000, saldoPeriodo: 200000, saldoFinal: 1700000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-06', saldoAnterior: 1700000, aReceber: 1500000, aPagar: 1200000, saldoPeriodo: 300000, saldoFinal: 2000000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-07', saldoAnterior: 2000000, aReceber: 1400000, aPagar: 1300000, saldoPeriodo: 100000, saldoFinal: 2100000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-08', saldoAnterior: 2100000, aReceber: 1600000, aPagar: 1400000, saldoPeriodo: 200000, saldoFinal: 2300000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-09', saldoAnterior: 2300000, aReceber: 1800000, aPagar: 1500000, saldoPeriodo: 300000, saldoFinal: 2600000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-10', saldoAnterior: 2600000, aReceber: 2000000, aPagar: 1600000, saldoPeriodo: 400000, saldoFinal: 3000000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-11', saldoAnterior: 3000000, aReceber: 2200000, aPagar: 1800000, saldoPeriodo: 400000, saldoFinal: 3400000, empresa: 'Construtora ABC Ltda' },
  { date: '2024-12', saldoAnterior: 3400000, aReceber: 2500000, aPagar: 2000000, saldoPeriodo: 500000, saldoFinal: 3900000, empresa: 'Construtora ABC Ltda' },
  
  // Dados para Incorporadora XYZ
  { date: '2024-01', saldoAnterior: 300000, aReceber: 600000, aPagar: 400000, saldoPeriodo: 200000, saldoFinal: 500000, empresa: 'Incorporadora XYZ S.A.' },
  { date: '2024-02', saldoAnterior: 500000, aReceber: 700000, aPagar: 500000, saldoPeriodo: 200000, saldoFinal: 700000, empresa: 'Incorporadora XYZ S.A.' },
  { date: '2024-03', saldoAnterior: 700000, aReceber: 800000, aPagar: 600000, saldoPeriodo: 200000, saldoFinal: 900000, empresa: 'Incorporadora XYZ S.A.' },
  { date: '2024-04', saldoAnterior: 900000, aReceber: 900000, aPagar: 700000, saldoPeriodo: 200000, saldoFinal: 1100000, empresa: 'Incorporadora XYZ S.A.' },
  { date: '2024-05', saldoAnterior: 1100000, aReceber: 1000000, aPagar: 800000, saldoPeriodo: 200000, saldoFinal: 1300000, empresa: 'Incorporadora XYZ S.A.' },
  { date: '2024-06', saldoAnterior: 1300000, aReceber: 1200000, aPagar: 900000, saldoPeriodo: 300000, saldoFinal: 1600000, empresa: 'Incorporadora XYZ S.A.' },
];

export const mockAccountBalances: AccountBalance[] = [
  { id: '1', account: 'Caixa', balance: 150000, type: 'ativo', empresa: 'Construtora ABC Ltda' },
  { id: '2', account: 'Banco Bradesco', balance: 850000, type: 'ativo', empresa: 'Construtora ABC Ltda' },
  { id: '3', account: 'Banco Itaú', balance: 450000, type: 'ativo', empresa: 'Construtora ABC Ltda' },
  { id: '4', account: 'Contas a Receber', balance: 1200000, type: 'ativo', empresa: 'Construtora ABC Ltda' },
  { id: '5', account: 'Fornecedores', balance: -800000, type: 'passivo', empresa: 'Construtora ABC Ltda' },
  { id: '6', account: 'Empréstimos', balance: -500000, type: 'passivo', empresa: 'Construtora ABC Ltda' },
  { id: '7', account: 'Impostos a Recolher', balance: -200000, type: 'passivo', empresa: 'Construtora ABC Ltda' },
  
  // Incorporadora XYZ
  { id: '8', account: 'Caixa', balance: 80000, type: 'ativo', empresa: 'Incorporadora XYZ S.A.' },
  { id: '9', account: 'Banco Santander', balance: 520000, type: 'ativo', empresa: 'Incorporadora XYZ S.A.' },
  { id: '10', account: 'Contas a Receber', balance: 900000, type: 'ativo', empresa: 'Incorporadora XYZ S.A.' },
  { id: '11', account: 'Fornecedores', balance: -400000, type: 'passivo', empresa: 'Incorporadora XYZ S.A.' },
  { id: '12', account: 'Empréstimos', balance: -300000, type: 'passivo', empresa: 'Incorporadora XYZ S.A.' },
];

export const mockExpenseRevenueData: ExpenseRevenueData[] = [
  { planoConta: 'Vendas de Imóveis', receitas: 2500000, despesas: 0, empresa: 'Construtora ABC Ltda' },
  { planoConta: 'Prestação de Serviços', receitas: 800000, despesas: 0, empresa: 'Construtora ABC Ltda' },
  { planoConta: 'Material de Construção', receitas: 0, despesas: 1200000, empresa: 'Construtora ABC Ltda' },
  { planoConta: 'Mão de Obra', receitas: 0, despesas: 800000, empresa: 'Construtora ABC Ltda' },
  { planoConta: 'Equipamentos', receitas: 0, despesas: 400000, empresa: 'Construtora ABC Ltda' },
  { planoConta: 'Impostos', receitas: 0, despesas: 300000, empresa: 'Construtora ABC Ltda' },
  { planoConta: 'Despesas Administrativas', receitas: 0, despesas: 200000, empresa: 'Construtora ABC Ltda' },
  
  // Incorporadora XYZ
  { planoConta: 'Vendas de Imóveis', receitas: 1800000, despesas: 0, empresa: 'Incorporadora XYZ S.A.' },
  { planoConta: 'Locação de Imóveis', receitas: 300000, despesas: 0, empresa: 'Incorporadora XYZ S.A.' },
  { planoConta: 'Material de Construção', receitas: 0, despesas: 900000, empresa: 'Incorporadora XYZ S.A.' },
  { planoConta: 'Mão de Obra', receitas: 0, despesas: 600000, empresa: 'Incorporadora XYZ S.A.' },
  { planoConta: 'Impostos', receitas: 0, despesas: 200000, empresa: 'Incorporadora XYZ S.A.' },
  { planoConta: 'Despesas Administrativas', receitas: 0, despesas: 150000, empresa: 'Incorporadora XYZ S.A.' },
];

export const mockCostCenterData: CostCenterData[] = [
  { centroCusto: 'Obra A - Residencial', valor: 1500000, tipo: 'despesa', empresa: 'Construtora ABC Ltda' },
  { centroCusto: 'Obra B - Comercial', valor: 800000, tipo: 'despesa', empresa: 'Construtora ABC Ltda' },
  { centroCusto: 'Obra C - Industrial', valor: 600000, tipo: 'despesa', empresa: 'Construtora ABC Ltda' },
  { centroCusto: 'Administração', valor: 200000, tipo: 'despesa', empresa: 'Construtora ABC Ltda' },
  { centroCusto: 'Vendas', valor: 300000, tipo: 'despesa', empresa: 'Construtora ABC Ltda' },
  
  // Incorporadora XYZ
  { centroCusto: 'Empreendimento Alpha', valor: 1100000, tipo: 'despesa', empresa: 'Incorporadora XYZ S.A.' },
  { centroCusto: 'Empreendimento Beta', valor: 550000, tipo: 'despesa', empresa: 'Incorporadora XYZ S.A.' },
  { centroCusto: 'Administração', valor: 150000, tipo: 'despesa', empresa: 'Incorporadora XYZ S.A.' },
  { centroCusto: 'Marketing', valor: 100000, tipo: 'despesa', empresa: 'Incorporadora XYZ S.A.' },
];

export const mockFinancialMetrics: FinancialMetrics[] = [
  {
    totalReceitas: 3300000,
    totalDespesas: 2900000,
    resultado: 400000,
    crescimentoMensal: 12.5,
    empresa: 'Construtora ABC Ltda'
  },
  {
    totalReceitas: 2100000,
    totalDespesas: 1850000,
    resultado: 250000,
    crescimentoMensal: 8.3,
    empresa: 'Incorporadora XYZ S.A.'
  }
];