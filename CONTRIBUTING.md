# Guia de Contribuição — Conventional Commits

Este projeto utiliza o padrão **Conventional Commits** para padronizar mensagens de commit.

Seguir este guia **não é opcional**. Ele garante um histórico legível, facilita revisões de código e permite automações como geração de changelog e versionamento semântico.

---

## Formato da Mensagem de Commit

A mensagem deve seguir **exatamente** este formato:
< tipo >(< escopo opcional >): <descrição curta no imperativo>

Exemplo válido:
feat(auth): add JWT-based authentication

### Regras importantes

- A **primeira linha é obrigatória**
- A descrição deve:
  - estar no **imperativo** (`add`, `fix`, `remove`, não `added` ou `adding`)
  - ser **clara e objetiva**
  - ter no máximo **50 caracteres**
- Commits vagos como `update stuff`, `fix bug`, `changes` **não são aceitos**

---

## Tipos de Commit Utilizados

Use **apenas** os tipos abaixo.

### `feat` — Nova funcionalidade

Para qualquer mudança que adicione comportamento novo visível ao usuário ou à API pública.

**Exemplos:**
feat: add user login page
feat(profile): allow avatar upload
feat(web): implement product search

---

### `fix` — Correção de bug

Para correções de comportamento incorreto ou falhas existentes.

**Exemplos:**
fix: prevent crash on startup
fix(auth): logout button not responding
fix(mobile): fix header alignment on Android

---

### `style` — Formatação e estilo

Apenas mudanças que **não alteram lógica nem comportamento**:
formatação, lint, espaços em branco, comentários, etc.

**Exemplos:**
style: format code with Prettier
style: fix indentation in main component

---

### `test` — Testes

Adição, correção ou refatoração de testes.
Não deve alterar código de produção.

**Exemplos:**
test: add unit tests for login validation
test(api): add integration tests for users endpoint

---

### `docs` — Documentação

Qualquer alteração em documentação ou comentários explicativos.

**Exemplos:**
docs: update README setup instructions
docs(api): document authentication endpoint

---

### `chore` — Manutenção

Tarefas de manutenção que não afetam diretamente o código de produção.

Inclui:
- dependências
- scripts
- configurações de ferramentas
- ajustes de CI/CD

**Exemplos:**
chore: update dependencies
chore: configure ESLint
chore(expo): upgrade Expo SDK to v50

---

## Por Que Seguimos Esse Padrão?

- **Histórico legível:** commits dizem *o que* foi feito e *por quê*
- **Revisões mais rápidas:** menos ambiguidade
- **Automação:** changelog, versionamento e releases previsíveis
- **Consistência:** todos falam a mesma língua

Commits são documentação. Trate-os como tal.
