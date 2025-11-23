# TechSupport App - Frontend (PIM-4)

<!-- BADGES SECTION -->
[![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)](https://github.com/heitorrsdev/PIM-4)
[![Licença](https://img.shields.io/github/license/heitorrsdev/PIM-4)](LICENSE)
[![Tecnologia Principal](https://img.shields.io/badge/Frontend-React%20Native%20Web-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Backend Integrado](https://img.shields.io/badge/Backend-API--MVC--Suptech%20(.NET%209)-512BD4?logo=dotnet&logoColor=white)](https://github.com/enricochicot/API-MVC-Suptech)

## 🎓 Contexto do Projeto (Trabalho de Conclusão de Curso - TCC)

Este repositório contém o código-fonte do **Frontend** do projeto **TechSupport App**, desenvolvido como parte do Trabalho de Conclusão de Curso (TCC). O objetivo é criar uma aplicação móvel e web para o **gerenciamento de chamados técnicos**, permitindo que usuários abram chamados que serão gerenciados por técnicos e gerentes.

O projeto é dividido em repositórios que se comunicam através da API central:

1.  **Frontend (Este Repositório):** Aplicação móvel e web desenvolvida com React Native Web e Expo para **Usuários e Técnicos**.
2.  **Frontend Desktop:** [SuptechDESKTOP](https://github.com/LeonardoZanchi/SuptechDESKTOP), aplicação desktop em JavaFX para **Gerentes**.
3.  **Backend (API):** [API-MVC-Suptech](https://github.com/enricochicot/API-MVC-Suptech), desenvolvida em ASP.NET Core (.NET 9) para gerenciar usuários e chamados.

## ✨ Funcionalidades (Visão Geral)

O aplicativo final terá as seguintes funcionalidades:

*   **Abertura de Chamados:** Usuários podem registrar problemas técnicos.
*   **Gerenciamento de Usuários:** Cadastro e autenticação de Usuários e Técnicos.
*   **Visualização de Chamados:** Listagem e detalhamento dos chamados abertos e atribuídos.
*   **Interface Multiplataforma:** Acesso via dispositivos móveis e navegadores web.

## 💻 Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :-- | :-- | :-- |
| **Framework** | React Native Web | Permite o desenvolvimento de aplicações nativas (iOS/Android) e web a partir de uma única base de código. |
| **Ambiente** | Expo | Conjunto de ferramentas e serviços para facilitar o desenvolvimento, build e deploy de apps React Native. |
| **Navegação** | React Navigation | Solução de roteamento e navegação para aplicações React Native. |
| **Linguagem** | TypeScript | Linguagem de programação principal, oferecendo tipagem estática para maior robustez. |
| **Backend** | ASP.NET Core (.NET 9) | Framework utilizado para a construção da API RESTful de suporte. |

## 🚧 Estado Atual e Próximos Passos

O projeto está em fase de desenvolvimento. O foco atual é a implementação da interface e a integração com a API.

| Status Atual | Próximos Passos |
| :--- | :--- |
| **Interface:** Telas de login e registro funcionais (em termos de UI). | **Integração com API:** Finalizar a integração com a API para autenticação e CRUD de chamados. |
| **Estrutura:** Projeto estruturado de forma modular e com gerenciamento de estado (Context API). | **Telas Adicionais:** Finalizar o desenvolvimento da tela de chamados e outras telas necessárias. |
| **Design:** Implementação de design responsivo, moderno e minimalista. | **Refinamento:** Implementar design responsivo, moderno e minimalista. |

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

1.  **Instale o Expo CLI:**
    
    ```shell
    npm install -g expo-cli
    ```
    
2.  **Clone o repositório:**
    
    ```shell
    git clone https://github.com/heitorrsdev/PIM-4.git
    cd PIM-4
    ```
    
3.  **Instale as dependências:**
    
    ```shell
    npm install
    ```
    
4.  **Inicie o servidor de desenvolvimento:**
    
    ```shell
    npx expo start
    ```
    
5.  **Acesse a Aplicação:**
    *   Use o aplicativo **Expo Go** no seu dispositivo móvel para escanear o QR Code.
    *   Pressione `w` no terminal para abrir a versão web no seu navegador.

## 🤝 Como Contribuir

Contribuições são bem-vindas! Por favor, siga o guia de commits [COMMIT\_GUIDE.md](COMMIT_GUIDE.md) e abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
