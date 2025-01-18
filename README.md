<div align="center" style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #007acc, #8a2be2); color: #fff; border-radius: 10px; border: 2px solid #fff;">
    <h1>API REST TYPESCRIPT</h1>
    <br>
    <p><strong>REST API with Node.js, TypeScript, and Yarn for city registration and user login! 🔐</strong></p>
    <img src="https://github.com/user-attachments/assets/3cc90132-f83a-44aa-8a6b-c4a1640a530e" alt="API Image"/>
    <br>
</div>

---

## 🛠️ Technologies Used

<ul>
    <li><strong>Node.js</strong> 🌐</li>
    <li><strong>TypeScript</strong> 🦾</li>
    <li><strong>Yarn</strong> 📦</li>
    <li><strong>Database:</strong> JSON & SQLite3</li>
</ul>

## 🚀 Features

<ul>
    <li>User authentication (login and password) 🔑</li>
    <li>Full CRUD for cities 🏙️</li>
    <li>Simple database using JSON 💾</li>
</ul>
<br>

---

## 🎯 How to Run the Project Locally

1. **Clone the repository:**
    ```bash  
    git clone https://github.com/your-user/CityListAPI.git  
    ```
2. **Install dependencies:**
     ```bash    
    yarn install  
     ```
3. **Run the application:**
     ```bash    
    yarn start  
     ```
4. **Access the API at:**
     ```bash   
    http://localhost:3333  
     ```
## 🛡️ Security  

- **Authentication:** Uses JWT (JSON Web Tokens) to ensure that only authenticated users can access protected routes.  
- **Data Validation:** Input data validation with `class-validator` and `zod` to ensure data integrity.  
<br>

---

## 📂 Directory Structure  

The project directory structure is organized as follows:

 ```bash   
api-rest-typescript/  
├── src/  
│   ├── server/  
│   │   ├── controllers/         # Request and response management  
│   │   ├── database/            # Database configuration  
│   │   │   ├── knex/            # Database connection and queries using Knex  
│   │   │   ├── migrations/      # Files for database versioning  
│   │   │   ├── models/          # Data entity and schema definitions  
│   │   │   ├── providers/       # Database related services  
│   │   │   └── seeds/           # Initial database data  
│   │   ├── routes/              # API route definitions  
│   │   └── shared/  
│   │       ├── middleware/      # Middleware functions (authentication, validation)  
│   │       └── services/        # Reusable logic and helper services  
├── tests/  
│   ├── cities/                 # Tests for city functionalities  
│   ├── people/                 # Tests for people functionalities  
│   └── users/                  # Tests for user functionalities  
├── .env                         # Environment variables file  
├── README.md                    # Project documentation  
├── tsconfig.json                # TypeScript configuration  
├── yarn.lock                    # Yarn dependency lock file  
├── jest.config.ts               # Jest test configuration  
└── package.json                 # Project metadata and dependencies  
 ```

<br>

---

## 📜 Project Scripts  

The `package.json` file contains the following scripts to automate important tasks in development and running the project:

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

### Explanation of the Scripts  

- **`start`**  
  Starts the project in development mode using `ts-node-dev`. This allows TypeScript code to be executed directly with automatic reloading when file changes are detected.  

- **`postinstall`**  
  Generates JavaScript code from TypeScript files after installing dependencies. Useful for preparing the production environment.  

- **`production`**  
  Runs the project after transpiling, executing the generated JavaScript code in `build/index.js` on Node.js. This script is used to start the server in production.  

- **`test`**  
  Runs the project tests using Jest, a framework for unit and integration tests.  

- **`knex:migrate`**  
  Applies database migrations defined in `migrations/` using Knex. This creates or alters tables as needed to keep the database schema updated.  

- **`knex:rollback`**  
  Rolls back the last applied migration, useful for fixing recent errors.  

- **`knex:rollback-all`**  
  Rolls back all applied migrations, restoring the database to its initial state.  

- **`knex:seed`**  
  Executes seed files in `seeds/` to populate the database with initial or test data.  

### Usage Tips  

- During development, use the `start` script to save time with automatic reloading.  
- Before deploying to production, run `postinstall` and validate everything with `test`.  
- To keep the database updated, run `knex:migrate`. If needed, use `knex:rollback` or `knex:rollback-all` to fix or reset the state.  
- Use `knex:seed` to test the system with simulated data or reset the database state in development environments.  
<br>

---

## 🧪 Automated Tests!  

To run automated tests:

1. **Install test dependencies:**  
     ```bash    
    yarn add jest @types/jest ts-jest --dev  
     ```
2. **Run the tests:**  
     ```bash    
    yarn test  
     ```
---

## 📚 Test API Endpoints  

You can directly test the API endpoints.

- Access after opening the server:  
     ```bash   
    http://localhost:3333/  
     ```
---

## 🌐 CORS Support  

The API is configured to allow requests from different domains using the `cors` package. This allows the API to be accessed by frontends hosted on different servers.

---

## 🔒 Authorization and Permissions  

- The API uses role-based access control. There are two main types of users:
  - **Admin:** Full access, including the ability to manage users and cities.
  - **User:** Limited access to CRUD cities and personal resources.

---

## ⚙️ Configuration and Environment Variables  

The API requires some environment variables for correct operation. You must rename the `.env.example` file with the following keys:

- `IS_LOCALHOST=true`
- `NODE_ENV=dev`
- `PORT=3333`
- `JWT_SECRET=[key_secret] set a secret key`

---

## 💡 Development  

- **Performance:** Cache for frequently accessed data like city lists.  
- **Improvements:** Redis caching system to improve response time on routes that perform heavy queries.

---

## 📅 Version Roadmap  

- **Version 1.0:** Initial release with basic CRUD and authentication features.  

<br><br>

---

## 📝 Available Endpoints  

 <br>
 <img src="https://github.com/user-attachments/assets/8d33268b-9507-40b8-9b5f-b6da58b95c0c" alt="API Endpoints" />   
 <br> 
 
 
### Cities 
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

### People  
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

<img src="https://github.com/user-attachments/assets/6f3ea7cf-8ffe-4bc4-97e5-28f7f003c40d" alt="API Endpoints Image">
