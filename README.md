teste pull request 
# TechSupport App - Frontend (PIM-4)

<!-- BADGES SECTION -->
[![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)](https://github.com/heitorrsdev/PIM-4)
[![Licença](https://img.shields.io/github/license/heitorrsdev/PIM-4)](LICENSE)
[![Tecnologia Principal](https://img.shields.io/badge/Frontend-React%20Native%20Web-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Backend Integrado](https://img.shields.io/badge/Backend-ASP.NET%20Core%20(.NET%209)-512BD4?logo=dotnet&logoColor=white)](https://github.com/enricochicot/API-MVC-Suptech)

## 🎓 Contexto do Projeto (Trabalho de Conclusão de Curso - TCC)

Este repositório contém o código-fonte do **Frontend** do projeto **TechSupport App**, desenvolvido como parte do Trabalho de Conclusão de Curso (TCC). O objetivo é criar uma aplicação móvel e web para o **gerenciamento de chamados técnicos**, com um diferencial na triagem inicial via **Inteligência Artificial (IA)** antes de encaminhar para técnicos humanos.

O projeto é dividido em dois repositórios:

1.  **Frontend (Este Repositório):** Aplicação móvel e web desenvolvida com React Native Web e Expo.
2.  **Backend (API):** [API-MVC-Suptech](https://github.com/enricochicot/API-MVC-Suptech), desenvolvida em ASP.NET Core (.NET 9) para gerenciar usuários e chamados.

## ✨ Funcionalidades (Visão Geral)

O aplicativo final terá as seguintes funcionalidades:

*   **Abertura de Chamados:** Usuários podem registrar problemas técnicos.
*   **Triagem por IA:** Resposta inicial e classificação do chamado por um chatbot de IA.
*   **Gerenciamento de Usuários:** Cadastro e autenticação de Administradores, Gerentes, Técnicos e Usuários.
*   **Visualização de Chamados:** Listagem e detalhamento dos chamados abertos.
*   **Interface Multiplataforma:** Acesso via dispositivos móveis e navegadores web.

## 💻 Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework** | React Native Web | Permite o desenvolvimento de aplicações nativas (iOS/Android) e web a partir de uma única base de código. |
| **Ambiente** | Expo | Conjunto de ferramentas e serviços para facilitar o desenvolvimento, build e deploy de apps React Native. |
| **Navegação** | React Navigation | Solução de roteamento e navegação para aplicações React Native. |
| **Linguagem** | TypeScript | Linguagem de programação principal, oferecendo tipagem estática para maior robustez. |
| **Backend** | ASP.NET Core (.NET 9) | Framework utilizado para a construção da API RESTful de suporte. |

## 🚧 Estado Atual e Próximos Passos

O projeto está em fase de desenvolvimento. O foco atual é a implementação da interface e a integração com a API.

Os próximos passos são: finalizar o desenvolvimento da tela de chamados, integrar o frontend com a IA que responderá os chamados e implementar design responsivo, moderno e minimalista.

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
    expo start
    ```
5.  **Acesse a Aplicação:**
    *   Use o aplicativo **Expo Go** no seu dispositivo móvel para escanear o QR Code.
    *   Pressione `w` no terminal para abrir a versão web no seu navegador.

## 🤝 Como Contribuir

Contribuições são bem-vindas, especialmente para o TCC! Por favor, siga o guia de commits [COMMIT_GUIDE.md](COMMIT_GUIDE.md) e abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
