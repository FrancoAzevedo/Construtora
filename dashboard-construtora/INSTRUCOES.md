# 🚀 Instruções Rápidas - Dashboard Construtora

## ⚡ Início Rápido

### 1. Executar o Sistema
```bash
# Opção 1: Usar o script automatizado
./start.sh

# Opção 2: Comandos manuais
npm install
npm run dev
```

### 2. Acessar o Dashboard
- **URL**: http://localhost:3000
- **Login**: Qualquer email e senha válidos
- **Exemplo**: admin@construtora.com / 123456

## 📊 Funcionalidades Principais

### Dashboard Financeiro
- **Métricas**: Receitas, despesas, resultado e margem
- **Fluxo de Caixa**: Gráfico com opções de 12 meses, 6 meses ou mês específico
- **Plano de Contas**: Gráfico horizontal de receitas e despesas
- **Centro de Custo**: Gráfico pizza com distribuição de custos
- **Evolução**: Gráfico de linha com tendências financeiras
- **Saldos**: Tabela com saldos das contas

### Filtros
- **Empresas**: 
  - Construtora ABC Ltda
  - Incorporadora XYZ S.A.
- **Períodos**: 12 meses, 6 meses, mês específico
- **Tipos de Conta**: Ativo, Passivo, Receita, Despesa

## 🎯 Navegação

### Menu Principal
- **Dashboard Geral**: Visão geral (em desenvolvimento)
- **Dashboard Financeiro**: Análises financeiras completas
- **Dashboard Obras**: Obras (próxima etapa)
- **Relatórios**: Relatórios detalhados (em desenvolvimento)
- **Análises**: Insights avançados (em desenvolvimento)
- **Configurações**: Configurações do sistema (em desenvolvimento)

### Controles
- **Sidebar**: Clique no ícone para expandir/recolher
- **Seletor de Empresa**: No header à direita
- **Filtros de Período**: Em cada gráfico
- **Logout**: Botão "Sair" na sidebar

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start

# Verificar código
npm run lint
```

## 📱 Recursos Responsivos

O dashboard é totalmente responsivo:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado
- **Mobile**: Menu hambúrguer e gráficos otimizados

## 🎨 Personalização

### Dados
- Modifique `src/data/mockData.ts` para usar dados reais
- Adicione novas empresas, contas e métricas

### Cores
- Personalize em `tailwind.config.ts`
- Modifique as cores dos gráficos nos componentes

### Gráficos
- Adicione novos gráficos em `src/components/dashboard/`
- Use a biblioteca Recharts para consistência

## 🛠️ Próximas Etapas

1. **Dashboard de Obras**: Gestão completa de obras
2. **APIs Reais**: Integração com backend
3. **Relatórios PDF**: Export de relatórios
4. **Notificações**: Sistema de alertas
5. **Permissões**: Controle de acesso por usuário

## 📞 Suporte

Para dúvidas ou sugestões:
- Documente issues no projeto
- Contribua com Pull Requests
- Sugira melhorias

---
💡 **Dica**: Use as teclas de atalho do navegador para navegar mais rapidamente pelo dashboard!