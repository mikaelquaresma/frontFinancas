# Arquitetura Hexagonal - SobraMais Frontend

## Estrutura do Projeto

### 📁 src/
```
├── dominio/                          # Camada de Domínio (Core)
│   ├── entidades/                    # Entidades de negócio
│   │   ├── Transacao.ts
│   │   ├── Saldo.ts
│   │   └── Despesa.ts
│   ├── servicos/                     # Serviços de domínio
│   └── repositorios/                 # Interfaces de repositórios
│       └── IRepositorioTransacao.ts
│
├── aplicacao/                        # Camada de Aplicação
│   ├── casosDeUso/                   # Use Cases/Casos de Uso
│   │   └── ObterTransacoesUseCase.ts
│   └── portas/                       # Interfaces/Portas
│       ├── entrada/                  # Input Ports
│       └── saida/                    # Output Ports
│
├── adaptadores/                      # Camada de Adaptadores
│   ├── primarios/                    # Adaptadores Primários (UI)
│   │   └── apresentacao/
│   │       ├── componentes/          # Componentes React
│   │       │   ├── layout.tsx
│   │       │   ├── navBar.tsx
│   │       │   ├── sidebar.tsx
│   │       │   ├── BalanceCards.tsx
│   │       │   ├── TransactionReports.tsx
│   │       │   ├── RecentTransactions.tsx
│   │       │   ├── MyCards.tsx
│   │       │   └── ExpensesChart.tsx
│   │       └── paginas/              # Páginas Next.js
│   └── secundarios/                  # Adaptadores Secundários
│       ├── persistencia/             # Repositórios/Storage
│       │   └── RepositorioTransacaoMock.ts
│       └── api/                      # APIs externas
│
├── compartilhado/                    # Shared/Compartilhado
│   ├── tipos/                        # Types/Interfaces comuns
│   ├── utilitarios/                  # Utilities
│   │   └── utils.ts
│   └── ui/                           # Componentes UI base
│       ├── button.tsx
│       ├── card.tsx
│       ├── avatar.tsx
│       └── ...
│
└── app/                              # Next.js App Router
    ├── (pages)/
    ├── 404/
    └── ...
```

## Princípios da Arquitetura Hexagonal

### 🎯 Camada de Domínio (Core)
- **Responsabilidade**: Regras de negócio puras
- **Dependências**: Nenhuma (independente)
- **Contém**: Entidades, Value Objects, Serviços de Domínio

### 🔄 Camada de Aplicação
- **Responsabilidade**: Orquestração dos casos de uso
- **Dependências**: Apenas do Domínio
- **Contém**: Use Cases, Interfaces de Portas

### 🔌 Adaptadores Primários
- **Responsabilidade**: Interface com o usuário
- **Dependências**: Aplicação e Domínio
- **Contém**: Componentes React, Controllers

### 🔌 Adaptadores Secundários
- **Responsabilidade**: Infraestrutura externa
- **Dependências**: Aplicação e Domínio
- **Contém**: Repositórios, APIs, Databases

### 🤝 Compartilhado
- **Responsabilidade**: Código reutilizável
- **Dependências**: Nenhuma ou mínimas
- **Contém**: Utils, Types, UI Components

## Fluxo de Dados

```
UI (Componente) → Use Case → Repositório → Dados
     ↓              ↓           ↓
Adaptador      Aplicação    Adaptador
Primário                   Secundário
```

## Benefícios

1. **Testabilidade**: Domínio isolado e testável
2. **Manutenibilidade**: Separação clara de responsabilidades
3. **Flexibilidade**: Fácil troca de adaptadores
4. **Independência**: Core não depende de frameworks
5. **Escalabilidade**: Estrutura organizada para crescimento

## Regras de Dependência

- Domínio não depende de nada
- Aplicação depende apenas do Domínio
- Adaptadores dependem de Aplicação/Domínio
- UI depende apenas de Adaptadores Primários