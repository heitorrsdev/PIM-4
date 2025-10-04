# TechSupport App - React Native com Expo

Este é um aplicativo móvel desenvolvido em React Native com Expo para gerenciamento de chamados técnicos. O app permite que usuários abram chamados sobre problemas tecnológicos, que serão respondidos por IA e, se necessário, por técnicos humanos.

## Estrutura do Projeto

```
app/
├── index.tsx              # Rota '/'
├── style.ts               # Estilos da rota '/'
├── rotaGenerica/
│   ├── index.tsx          # Componente principal
│   ├── style.ts           # Estilos específicos
│   └── components/        # Componentes da rota
│      └── comp1/
│         ├── index.tsx    # Componente comp1
│         └── style.ts     # Estilos do comp1
├── components/            # Componentes globais
│   └── divisaoLogica/
│      ├── index.tsx       # Exports
│      ├── componenteEx1/  
│      │   ├── componenteEx.tsx
│      │   └── style.ts
│      └── componenteEx2/  
│          ├── componenteEx.tsx
│          └── style.ts
└── README.md              # Documentação

```

## Próximos Passos

1. **Funcionalidades básicas de autenticação**
   - Telas de login e registro funcionais com dados mockados
2. **Telas Adicionais**: Implementar telas para:
   - Dashboard principal
   - Lista de chamados
   - Criação de novos chamados
   - Chat com IA/técnico
   - Perfil do usuário
3. **Componentes**: Criar componentes reutilizáveis como:
   - Header personalizado
   - Cards de chamados
   - Componente de chat
4. **Navegação**: Configurar navegação completa entre todas as telas
5. **Estado Global**: Implementar gerenciamento de estado (Context API ou Redux)
6. **Integração com API .NET**: Implementar chamadas reais à API

## Tecnologias Utilizadas

- React Native
- Expo
- React Navigation (para navegação entre telas)
- JavaScript ES6+

## Como Executar

1. Certifique-se de ter o Expo CLI instalado
2. Execute `expo start` na pasta do projeto
3. Use o aplicativo Expo Go no seu dispositivo ou um emulador

## Observações

- As telas de login e registro estão funcionais em termos de interface, mas as chamadas para API ainda precisam ser implementadas
- O projeto está estruturado de forma modular para facilitar a manutenção e expansão
- Todos os estilos seguem boas práticas de design mobile com foco na experiência do usuário

