'use client';

import { useState } from 'react';
import { ChevronDown, Building2, Bell, Search } from 'lucide-react';
import { User, Company } from '@/types';

interface HeaderProps {
  user: User;
  companies: Company[];
  selectedCompany: Company;
  onCompanyChange: (company: Company) => void;
  title: string;
}

export default function Header({ 
  user, 
  companies, 
  selectedCompany, 
  onCompanyChange, 
  title 
}: HeaderProps) {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Título da página */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500">Acompanhe os indicadores da sua construtora</p>
        </div>

        {/* Área direita - Seletor de empresa, notificações e usuário */}
        <div className="flex items-center space-x-4">
          {/* Seletor de empresa */}
          <div className="relative">
            <button
              onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Building2 className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {selectedCompany.name}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {/* Dropdown */}
            {isCompanyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Selecionar Empresa
                  </div>
                  {companies.map((company) => (
                    <button
                      key={company.id}
                      onClick={() => {
                        onCompanyChange(company);
                        setIsCompanyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors ${
                        selectedCompany.id === company.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{company.name}</p>
                          <p className="text-xs text-gray-500">{company.cnpj}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Busca */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
          </div>

          {/* Notificações */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Perfil do usuário */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}