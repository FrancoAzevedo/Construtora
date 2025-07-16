# Dashboard Construtora

Sistema completo de dashboard para acompanhar obras e finanças de construtoras.

## Características

### 🏗️ Dashboard Financeiro
- **Fluxo de Caixa**: Visualização com opções de período (12 meses, 6 meses, mês específico)
- **Métricas Principais**: Receitas, despesas, resultado e margem
- **Gráficos Avançados**:
  - Fluxo de caixa com barras verticais
  - Receitas e despesas por plano de contas (barras horizontais)
  - Custos por centro de custo (gráfico pizza)
  - Evolução dos indicadores financeiros (linha)
- **Lista de Saldos**: Tabela com saldos das contas organizados por tipo
- **Filtros por Empresa**: Todos os gráficos podem ser filtrados pela empresa selecionada

### 🔐 Autenticação
- Sistema de login moderno e responsivo
- Gestão de sessão do usuário
- Interface amigável com validação de formulários

### 📊 Interface Moderna
- Design responsivo com Tailwind CSS
- Sidebar colapsável
- Header com seletor de empresa
- Notificações em tempo real
- Perfil do usuário integrado

### 🏢 Multi-empresa
- Suporte para múltiplas construtoras
- Filtros dinâmicos por empresa
- Dados isolados por organização

## Tecnologias Utilizadas

- **Frontend**: Next.js 15 com TypeScript
- **Styling**: Tailwind CSS
- **Gráficos**: Recharts
- **Ícones**: Lucide React
- **Formatação**: date-fns

## Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página principal
│   └── layout.tsx         # Layout global
├── components/            # Componentes React
│   ├── auth/              # Componentes de autenticação
│   ├── dashboard/         # Componentes do dashboard
│   └── layout/            # Componentes de layout
├── data/                  # Dados mock para demonstração
├── types/                 # Definições TypeScript
└── styles/                # Estilos globais
```

## Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## Dados de Demonstração

O sistema inclui dados mock para demonstração:

### Empresas
- Construtora ABC Ltda
- Incorporadora XYZ S.A.

### Usuário Demo
- Email: qualquer email válido
- Senha: qualquer senha

## Funcionalidades Implementadas

### ✅ Dashboard Financeiro
- [x] Fluxo de caixa com filtros de período
- [x] Métricas principais (receitas, despesas, resultado, margem)
- [x] Gráfico de receitas e despesas por plano de contas
- [x] Gráfico de custos por centro de custo
- [x] Evolução dos indicadores financeiros
- [x] Lista de saldos das contas
- [x] Filtros por empresa

### ✅ Autenticação e Layout
- [x] Sistema de login
- [x] Sidebar responsiva
- [x] Header com seletor de empresa
- [x] Gestão de usuário logado
- [x] Interface moderna e responsiva

### 🔄 Próximas Etapas
- [ ] Dashboard de Obras
- [ ] Relatórios avançados
- [ ] Análises e insights
- [ ] Integração com APIs reais
- [ ] Notificações em tempo real

## Personalização

O sistema foi projetado para ser facilmente customizável:

1. **Dados**: Substitua os dados mock em `src/data/mockData.ts`
2. **Cores**: Personalize as cores no arquivo `tailwind.config.ts`
3. **Gráficos**: Adicione novos tipos de gráficos em `src/components/dashboard/`
4. **Layouts**: Modifique os componentes de layout em `src/components/layout/`

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ para construtoras que buscam modernizar sua gestão financeira.
