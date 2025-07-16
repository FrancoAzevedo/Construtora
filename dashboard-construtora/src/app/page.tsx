'use client';

import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { mockUser, mockCompanies } from '@/data/mockData';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(mockUser);

  const handleLogin = (email: string, password: string) => {
    // Simular autenticação - em produção, fazer chamada para API
    if (email && password) {
      setIsAuthenticated(true);
      setUser(mockUser);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(mockUser);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <DashboardLayout
      user={user}
      companies={mockCompanies}
      onLogout={handleLogout}
    />
  );
}
