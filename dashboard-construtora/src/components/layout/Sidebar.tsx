'use client';

import { useState } from 'react';
import { 
  Building2, 
  BarChart3, 
  Wrench, 
  DollarSign, 
  Settings, 
  LogOut, 
  ChevronLeft,
  ChevronRight,
  PieChart,
  TrendingUp
} from 'lucide-react';
import { User } from '@/types';

interface SidebarProps {
  user: User;
  onLogout: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ user, onLogout, activeSection, onSectionChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard Geral',
      icon: BarChart3,
      href: '#'
    },
    {
      id: 'financial',
      label: 'Dashboard Financeiro',
      icon: DollarSign,
      href: '#'
    },
    {
      id: 'projects',
      label: 'Dashboard Obras',
      icon: Wrench,
      href: '#'
    },
    {
      id: 'reports',
      label: 'Relatórios',
      icon: TrendingUp,
      href: '#'
    },
    {
      id: 'analytics',
      label: 'Análises',
      icon: PieChart,
      href: '#'
    },
    {
      id: 'settings',
      label: 'Configurações',
      icon: Settings,
      href: '#'
    }
  ];

  return (
    <div className={`bg-white shadow-lg h-screen flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            {!isCollapsed && (
              <div className="ml-3">
                <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Construtora</p>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                  : 'text-gray-700 hover:bg-gray-50'
              } ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
              {!isCollapsed && (
                <span className="ml-3 font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          {!isCollapsed && (
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          )}
        </div>
        
        {!isCollapsed && (
          <button
            onClick={onLogout}
            className="w-full mt-3 flex items-center px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="ml-3">Sair</span>
          </button>
        )}
        
        {isCollapsed && (
          <button
            onClick={onLogout}
            className="w-full mt-3 flex items-center justify-center px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}