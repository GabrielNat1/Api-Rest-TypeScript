<img src='https://github.com/user-attachments/assets/6f3ea7cf-8ffe-4bc4-97e5-28f7f003c40d'>

<div align="center" style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #007acc, #8a2be2); color: #fff; border-radius: 10px; border: 2px solid #fff;">
    <h1> API REST TYPESCRIPT </h1>
    <br>
    <p><strong>API REST com Node.js, TypeScript e Yarn para cadastro de cidades e login de usuários! 🔐</strong></p>
    <img src='https://github.com/user-attachments/assets/3cc90132-f83a-44aa-8a6b-c4a1640a530e')
    <br>
</div>
<br><br>

---

## 🛠️ Tecnologias Utilizadas

<ul>
    <li><strong>Node.js</strong> 🌐</li>
    <li><strong>TypeScript</strong> 🦾</li>
    <li><strong>Yarn</strong> 📦</li>
    <li><strong>Banco de Dados:</strong> JSON & SQLite3</li>
</ul>

## 🚀 Funcionalidades

<ul>
    <li>Autenticação de usuários (login e senha) 🔑</li>
    <li>CRUD completo para cidades 🏙️</li>
    <li>Banco de dados simples utilizando JSON 💾</li>
</ul>
<br>

---

## 🎯 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/CityListAPI.git
    ```
2. **Instale as dependências:**
    ```bash
    yarn install
    ```
3. **Execute a aplicação:**
    ```bash
    yarn start
    ```
4. **Acesse a API em:**
    ```bash
    http://localhost:3333
    ```

## 🛡️ Segurança  

- **Autenticação:** Utiliza JWT (JSON Web Tokens) para garantir que apenas usuários autenticados possam acessar rotas protegidas.  
- **Validação de Dados:** Validação dos dados de entrada com `class-validator` e `zod` para garantir a integridade das informações.  
<br>

---

## 📂 Estrutura de Diretórios  

A estrutura de diretórios do projeto é organizada da seguinte forma:

<br>

```bash
api-rest-typescript/  
├── src/  
│   ├── server/  
│   │   ├── controllers/         # Gerenciamento das requisições e respostas  
│   │   ├── database/            # Configuração da base de dados  
│   │   │   ├── knex/            # Conexão e queries com o banco de dados usando Knex  
│   │   │   ├── migrations/      # Arquivos para versionamento da base de dados  
│   │   │   ├── models/          # Definições das entidades e esquemas de dados  
│   │   │   ├── providers/       # Serviços relacionados a banco de dados  
│   │   │   └── seeds/           # Dados para inicialização do banco  
│   │   ├── routes/              # Definição das rotas da API  
│   │   └── shared/  
│   │       ├── middleware/      # Funções intermediárias (autenticação, validação)  
│   │       └── services/        # Lógica reutilizável e serviços auxiliares  
├── tests/  
│   ├── cidades/                 # Testes relacionados às funcionalidades de cidades  
│   ├── pessoas/                 # Testes relacionados às funcionalidades de pessoas  
│   └── usuarios/                # Testes relacionados às funcionalidades de usuários  
├── .env                         # Arquivo de variáveis de ambiente  
├── README.md                    # Documentação do projeto  
├── tsconfig.json                # Configuração do TypeScript  
├── yarn.lock                    # Arquivo de bloqueio de dependências do Yarn  
├── jest.config.ts               # Configuração do Jest para testes  
└── package.json                 # Metadados e dependências do projeto  
```

<br>

---
## 📜 Scripts do Projeto  

O arquivo `package.json` contém os seguintes scripts, que ajudam a automatizar tarefas importantes no desenvolvimento e execução do projeto:

```json
"scripts": {  
  "start": "ts-node-dev ./src/index.ts",  
  "postinstall": "tsc",  
  "production": "node ./build/index.js",  
  "test": "jest",  
  "knex:migrate": "knex --knexfile ./src/server/database/knex/Environment.ts migrate:latest",  
  "knex:rollback": "knex --knexfile ./src/server/database/knex/Environment.ts migrate:rollback",  
  "knex:rollback-all": "knex --knexfile ./src/server/database/knex/Environment.ts migrate:rollback --all",  
  "knex:seed": "knex --knexfile ./src/server/database/knex/Environment.ts seed:run"  
}  
```

### Explicação dos Scripts  

- **`start`**  
  Inicia o projeto em modo de desenvolvimento usando `ts-node-dev`. Isso permite que o código TypeScript seja executado diretamente, com suporte a recarregamento automático ao detectar mudanças nos arquivos.  

- **`postinstall`**  
  Gera o código JavaScript a partir dos arquivos TypeScript após a instalação das dependências. Isso é útil para preparar o ambiente de produção.  

- **`production`**  
  Executa o projeto já transpilado, rodando o código gerado em `build/index.js` no Node.js. Esse script é usado para iniciar o servidor em produção.  

- **`test`**  
  Executa os testes do projeto usando o Jest, que é uma biblioteca para testes unitários e integração.  

- **`knex:migrate`**  
  Aplica as migrações do banco de dados definidas em `migrations/` usando o Knex. Isso cria ou altera tabelas conforme necessário para manter a estrutura do banco de dados atualizada.  

- **`knex:rollback`**  
  Reverte a última migração aplicada no banco de dados, útil para corrigir erros recentes.  

- **`knex:rollback-all`**  
  Reverte todas as migrações aplicadas no banco de dados, restaurando-o ao estado inicial.  

- **`knex:seed`**  
  Executa os arquivos de seed definidos em `seeds/` para popular o banco de dados com dados iniciais ou de teste.  

### Dicas de Uso  

- Durante o desenvolvimento, utilize o script `start` para economizar tempo com recarregamentos automáticos.  
- Antes de subir para produção, execute `postinstall` e valide tudo com `test`.  
- Para manter o banco atualizado, rode `knex:migrate`. Caso precise testar ou corrigir, os scripts `knex:rollback` e `knex:rollback-all` são úteis.  
- Use `knex:seed` para testar o sistema com dados simulados ou reiniciar o estado do banco em ambientes de desenvolvimento.  
<br>

---

## 🧪 Testes Automatizados!  

Para rodar os testes automatizados:

1. **Instale as dependências de teste**:  
    - `yarn add jest @types/jest ts-jest --dev`

2. **Rodando os testes**:  
    - `yarn test`

---

## 📚 Testes Dos EndPoints Da API  

Onde você pode testar os endpoints diretamente.

- Acesse após abrir o servidor:  
    - `http://localhost:3333/`

---

## 🌐 Suporte a CORS  

A API está configurada para permitir requisições de diferentes domínios, utilizando o pacote `cors`. Isso permite que a API seja acessada por frontends em diferentes servidores.

---

## 🔒 Autorização e Permissões  

- A API utiliza controle de acesso baseado em roles. Existem dois principais tipos de usuário:
  - **Admin:** Acesso completo, incluindo a possibilidade de gerenciar usuários e cidades.
  - **Usuário:** Acesso apenas ao CRUD de cidades e recursos pessoais.

---

## ⚙️ Configuração e Variáveis de Ambiente  

A API depende de algumas variáveis de ambiente para funcionamento correto. Você deve renomear o arquivo `.env.example` com as seguintes chaves:

- `IS_LOCALHOST=true`
- `NODE_ENV=dev`
- `PORT=3333`
- `JWT_SECRET=[key_secret] coloque uma chave secreta`

---

## 💡 Desenvolvimento  

- **Performance:** cache para dados frequentemente acessados, como listas de cidades.  
- **Melhorias:** sistema de cache com Redis para melhorar o tempo de resposta em rotas que fazem consultas pesadas.

---

## 📅 Roadmap de Versões  

- **Versão 1.0:** Lançamento inicial com funcionalidades básicas de CRUD e autenticação.  

<br><br>

---

## 📝 Endpoints Disponíveis  
 <br>
 <img src='https://github.com/user-attachments/assets/8d33268b-9507-40b8-9b5f-b6da58b95c0c')    
 <br> 
 
### Cidades  
```bash
- `GET /cidade` - Listar todas as cidades
```
```bash
- `POST /cidade` - Adicionar uma nova cidade
```
```bash
- `PUT /cidade/:id` - Atualizar uma cidade pelo ID
```
```bash
- `DELETE /cidade/:id` - Remover uma cidade pelo ID
```

### Pessoas  
```bash
- `GET /pessoa` - Listar todas as pessoas
```
```bash
- `POST /pessoa` - Adicionar uma nova pessoa
```
```bash
- `PUT /pessoa/:id` - Atualizar uma pessoa pelo ID
```
```bash
- `DELETE /pessoa/:id` - Remover uma pessoa pelo ID
```

### Login  
```bash
- `POST /post/entrar` - Entrar
```
```bash 
- `POST /post/cadastrar` - Cadastrar 
```

<br><br>

<img src='https://github.com/user-attachments/assets/6f3ea7cf-8ffe-4bc4-97e5-28f7f003c40d'>
