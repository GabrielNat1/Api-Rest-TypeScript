<img src='https://github.com/user-attachments/assets/6f3ea7cf-8ffe-4bc4-97e5-28f7f003c40d'>

<div align="center" style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #007acc, #8a2be2); color: #fff; border-radius: 10px; border: 2px solid #fff;">
    <h1> API REST TYPESCRIPT </h1> <img src='https://github.com/user-attachments/assets/cb021ecc-80a6-45b6-8862-34caabda8589' width=50> 
    <p>API REST com Node.js, TypeScript e Yarn para cadastro de cidades e login de usuários! 🔐</p>
    <img src='')
    <br>
</div>

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
    yarn dev
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

## 🧪 Testes Automatizados  

Para rodar os testes automatizados:

1. **Instale as dependências de teste**:  
    - `yarn add jest @types/jest ts-jest --dev`

2. **Rodando os testes**:  
    - `yarn test`

---

## 📚 Testes Da API  

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

- **Performance:** Utilize cache para dados frequentemente acessados, como listas de cidades.  
- **Melhorias:** Considere implementar um sistema de cache com Redis para melhorar o tempo de resposta em rotas que fazem consultas pesadas.

---

## 📅 Roadmap de Versões  

- **Versão 1.0:** Lançamento inicial com funcionalidades básicas de CRUD e autenticação.  
-
-

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

<img src='https://github.com/user-attachments/assets/6f3ea7cf-8ffe-4bc4-97e5-28f7f003c40d'>
