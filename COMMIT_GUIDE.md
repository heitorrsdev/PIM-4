# Um Guia Simples sobre Conventional Commits

Este guia explica como usar *Conventional Commits*, uma maneira simples e eficaz de escrever mensagens de commit claras e padronizadas. Seguir esta convenção torna o histórico do nosso projeto mais fácil de ler e ajuda a automatizar tarefas, como a geração de *changelogs*.

## O que é um Conventional Commit?

Uma mensagem de *Conventional Commit* é estruturada da seguinte forma:

< tipo > [escopo opcional]: <descrição (até 50 char)>

[corpo opcional]


A parte mais importante é a primeira linha, que inclui um **tipo** e uma curta **descrição**.

---

## Tipos de Commit Mais Comuns

Aqui estão os principais tipos que usaremos em nosso projeto. Cada tipo nos ajuda a entender *por que* uma mudança foi feita.

### `feat`: Adicionando uma Nova Funcionalidade

Use `feat` quando você adicionar uma nova funcionalidade ou recurso para o usuário. É para coisas que os usuários verão ou com as quais interagirão.

**Exemplos:**
*   `feat: add user login page`
*   `feat(profile): allow users to upload a profile picture`
*   `feat(web): implement product search bar for the web app`

### `fix`: Corrigindo um Bug

Use `fix` quando você corrigir um bug ou um erro no código. Isso resolve diretamente um problema que estava causando um comportamento incorreto.

**Exemplos:**
*   `fix: prevent app from crashing on startup`
*   `fix(auth): resolve issue where logout button was not working`
*   `fix(mobile): correct alignment of header on Android devices`

### `style`: Mudanças de Estilo de Código

Use `style` para alterações que não afetam o significado ou a lógica do código. É puramente para formatação, como corrigir indentação, adicionar ponto e vírgula ou corrigir erros de digitação em comentários.

**Exemplos:**
*   `style: format code with Prettier`
*   `style: fix indentation in the main component`
*   `style: remove extra whitespace at end of files`

### `test`: Adicionando ou Corrigindo Testes

Use `test` quando você adicionar novos testes ou corrigir testes existentes. Isso não altera nenhum código de produção da aplicação.

**Exemplos:**
*   `test: add unit tests for the login form validation`
*   `test(user-api): create integration tests for user endpoints`
*   `test: fix broken tests for the shopping cart component`

### `docs`: Mudanças na Documentação

Use `docs` para qualquer alteração relacionada à documentação. Isso pode ser a atualização do `README.md`, a adição de comentários para explicar um código complexo ou a escrita de guias.

**Exemplos:**
*   `docs: update README with setup instructions`
*   `docs(api): add documentation for the authentication endpoint`
*   `docs: explain how the state management works in a comment`

### `chore`: Manutenção e Outras Tarefas

Use `chore` para manutenção de rotina e outras alterações que não se encaixam nas outras categorias e não modificam o código de produção. Isso geralmente inclui a atualização de scripts de build, o gerenciamento de dependências ou a configuração de ferramentas.

**Exemplos:**
*   `chore: update dependencies to their latest versions`
*   `chore: configure ESLint for the project`
*   `chore(expo): upgrade Expo SDK from version 49 to 50`

---

## Por que Isso é Útil para Nós?

*   **Histórico Claro:** Qualquer pessoa pode olhar nosso log do Git e entender imediatamente o que cada mudança faz.
*   **Melhor Trabalho em Equipe:** Cria uma linguagem compartilhada para nossas contribuições.
*   **É Simples:** Precisamos lembrar apenas de alguns prefixos para começar.

Usando essas convenções, manteremos nosso projeto organizado e tornaremos nosso processo de desenvolvimento muito mais tranquilo.
