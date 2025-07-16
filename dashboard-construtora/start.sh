#!/bin/bash

# Dashboard Construtora - Script de Inicialização
echo "🏗️  Dashboard Construtora - Sistema de Gestão"
echo "============================================="
echo ""

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado. Por favor, instale o Node.js 18+ primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não está instalado. Por favor, instale o npm primeiro."
    exit 1
fi

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

echo "🚀 Iniciando servidor de desenvolvimento..."
echo "📱 Acesse: http://localhost:3000"
echo "🔑 Login: use qualquer email e senha para testar"
echo ""
echo "💡 Dica: Para parar o servidor, pressione Ctrl+C"
echo ""

# Iniciar o servidor
npm run dev