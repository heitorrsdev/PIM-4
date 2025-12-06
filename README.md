# Suptech App - Frontend (Mobile e Web)

[![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)](https://github.com/heitorrsdev/PIM-4)
[![Licença](https://img.shields.io/github/license/heitorrsdev/PIM-4)](LICENSE)
[![Tecnologia Principal](https://img.shields.io/badge/Frontend-React%20Native%20Web-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Backend Integrado](https://img.shields.io/badge/Backend-API--MVC--Suptech%20(.NET%209)-512BD4?logo=dotnet&logoColor=white)](https://github.com/enricochicot/API-MVC-Suptech)

## 🎓 Contexto do Projeto (Trabalho de Conclusão de Curso - TCC)

Este repositório contém o código-fonte do **Frontend** do projeto **Suptech**, desenvolvido como parte do Trabalho de Conclusão de Curso (TCC). O **Suptech App** é uma aplicação móvel e web para o **gerenciamento de chamados técnicos**, permitindo que usuários abram chamados que são gerenciados por técnicos e gerentes.

O sistema **Suptech** é composto por três repositórios principais que se comunicam através da API central:

| Componente | Tecnologia | Público-Alvo | Repositório |
| :--- | :--- | :--- | :--- |
| **Frontend (Este Repositório)** | React Native Web + Expo | Usuários e Técnicos | [heitorrsdev/PIM-4](https://github.com/heitorrsdev/PIM-4) |
| **Frontend Desktop** | JavaFX 21 | Gerentes | [LeonardoZanchi/SuptechDESKTOP](https://github.com/LeonardoZanchi/SuptechDESKTOP) |
| **Backend (API Central)** | ASP.NET Core (.NET 9) | - | [API-MVC-Suptech](https://github.com/enricochicot/API-MVC-Suptech) |

## ✨ Funcionalidades Implementadas

O **Suptech App** oferece as seguintes funcionalidades:

*   **Abertura de Chamados:** Usuários podem registrar problemas técnicos de forma simples e rápida.
*   **Gerenciamento de Usuários:** Autenticação de Usuários e Técnicos.
*   **Visualização de Chamados:** Listagem e detalhamento dos chamados abertos e atribuídos, com filtros por status e prioridade.
*   **Interface Multiplataforma:** Acesso completo via dispositivos móveis (iOS/Android) e navegadores web.
*   **Integração Completa:** Comunicação estável e segura com a API central.

## 💻 Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :-- | :-- | :-- |
| **Framework** | React Native Web | Permite o desenvolvimento de aplicações nativas (iOS/Android) e web a partir de uma única base de código. |
| **Ambiente** | Expo | Conjunto de ferramentas e serviços para facilitar o desenvolvimento, build e deploy de apps React Native. |
| **Navegação** | React Navigation | Solução de roteamento e navegação para aplicações React Native. |
| **Linguagem** | TypeScript | Linguagem de programação principal, oferecendo tipagem estática para maior robustez. |
| **Backend** | ASP.NET Core (.NET 9) | Framework utilizado para a construção da API RESTful de suporte. |

## 📁 Estrutura do Projeto

A estrutura do projeto segue um padrão modular para facilitar a manutenção e a expansão:

```
.
├── app/                  # Rotas e Telas da Aplicação
├── components/           # Componentes globais reutilizáveis
├── contexts/             # Gerenciamento de Estado Global (Context API)
├── hooks/                # Hooks customizados
├── services/             # Lógica de consumo da API e serviços
├── styles/               # Estilos globais e temas
├── utils/                # Funções utilitárias
└── README.md
```

## 🛠️ Como Executar Localmente

Para executar o **Suptech App** em seu ambiente de desenvolvimento, siga os passos abaixo:

1.  **Certifique-se de que a API está rodando:**
    *   O backend ([API-MVC-Suptech](https://github.com/enricochicot/API-MVC-Suptech)) deve estar em execução para que o frontend funcione corretamente.
2.  **Instale o Expo CLI:**
    
    ```shell
    npm install -g expo-cli
    ```
    
3.  **Clone o repositório:**
    
    ```shell
    git clone https://github.com/heitorrsdev/PIM-4.git
    cd PIM-4
    ```
    
4.  **Instale as dependências:**
    
    ```shell
    npm install
    ```
    
5.  **Inicie a aplicação:**
    
    ```shell
    npx expo start
    ```
    
6.  **Acesse a Aplicação:**
    *   Use o aplicativo **Expo Go** no seu dispositivo móvel para escanear o QR Code.
    *   Pressione `w` no terminal para abrir a versão web no seu navegador.

## 🤝 Contribuição e Manutenção

O projeto está concluído, mas contribuições para manutenção e melhorias futuras são bem-vindas. Por favor, siga o guia de commits [COMMIT\_GUIDE.md](COMMIT_GUIDE.md) e abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
