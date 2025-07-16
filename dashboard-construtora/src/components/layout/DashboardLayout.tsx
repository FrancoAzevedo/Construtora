'use client';

import { useState } from 'react';
import { User, Company } from '@/types';
import Sidebar from './Sidebar';
import Header from './Header';
import FinancialDashboard from '../dashboard/FinancialDashboard';
import { 
  mockCashFlowData, 
  mockAccountBalances, 
  mockExpenseRevenueData, 
  mockCostCenterData, 
  mockFinancialMetrics 
} from '@/data/mockData';

interface DashboardLayoutProps {
  user: User;
  companies: Company[];
  onLogout: () => void;
}

export default function DashboardLayout({ user, companies, onLogout }: DashboardLayoutProps) {
  const [activeSection, setActiveSection] = useState('financial');
  const [selectedCompany, setSelectedCompany] = useState<Company>(companies[0]);

  const getSectionTitle = (section: string) => {
    switch (section) {
      case 'dashboard':
        return 'Dashboard Geral';
      case 'financial':
        return 'Dashboard Financeiro';
      case 'projects':
        return 'Dashboard Obras';
      case 'reports':
        return 'Relatórios';
      case 'analytics':
        return 'Análises';
      case 'settings':
        return 'Configurações';
      default:
        return 'Dashboard';
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'financial':
        return (
          <FinancialDashboard
            cashFlowData={mockCashFlowData}
            accountBalances={mockAccountBalances}
            expenseRevenueData={mockExpenseRevenueData}
            costCenterData={mockCostCenterData}
            financialMetrics={mockFinancialMetrics}
            selectedCompany={selectedCompany}
          />
        );
      case 'projects':
        return (
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dashboard Obras</h3>
              <p className="text-gray-600">Esta seção será desenvolvida na próxima etapa.</p>
            </div>
          </div>
        );
      case 'dashboard':
        return (
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dashboard Geral</h3>
              <p className="text-gray-600">Visão geral de todos os indicadores da construtora.</p>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Relatórios</h3>
              <p className="text-gray-600">Relatórios detalhados financeiros e operacionais.</p>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Análises</h3>
              <p className="text-gray-600">Análises avançadas e insights de negócio.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurações</h3>
              <p className="text-gray-600">Configurações do sistema e preferências.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Seção não encontrada</h3>
              <p className="text-gray-600">A seção solicitada não foi encontrada.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        user={user}
        onLogout={onLogout}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          user={user}
          companies={companies}
          selectedCompany={selectedCompany}
          onCompanyChange={setSelectedCompany}
          title={getSectionTitle(activeSection)}
        />
        
        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
}