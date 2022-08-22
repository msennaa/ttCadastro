# Boas-vindas ao repositório Cadastro de funcionários!

Uma aplicação fullstack onde é possível cadastrar, editar, filtrar por setor e excluir um funcionário.

---
# Orientações

<details>
  <summary>
    <strong>⌨️ Tecnologias</strong>
  </summary>
  
  - **Typescript**
  
  - **Node**
  
  - **Express**
  
  - **MySql**
  
  - **Sequelize**
  
  - **Chai**
  
  - **Mocha**
  
  - **Sinon**

  - **ReactJs**
  
  - **Axios**
  
  - **Css**

</details>

<details>
  <summary>
    <strong>🪛 Scripts relevantes do <code>package.json</code></strong>
  </summary><br>

  - `dev`: Roda a aplicação backend na porta `3001`;
    - *uso (na raiz do backend): `npm run dev`*

  - `db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados**. Utilize esse script caso ocorra algum problema no seu banco local;
    - *uso (na raiz do backend): `npm run db:reset`*

  - `start`: Roda a aplicação frontend;
    - *uso (na raiz do frontend): `npm start`*

</details>

 <details>
  <summary>
    <strong>‼️ Antes de começar a utilizar</strong>
  </summary><br>

  1. Certifique-se que possui o bando de dados MYSQL em sua máquina
  
 </details>

<details>
  <summary>
    <strong>🤝 Passo a Passo</strong>
  </summary><br>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:msennaa/ttCadastro.git`
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd ttCadastro`

  2. Instale as dependências do backend

  - Para isso, use os seguintes os comandos: `cd backend && npm install`
  
  3. Restaure o banco de dados

  - Para isso, use o seguinte comando na raiz do backend: `npm run db:reset`
  
  4. Subindo a aplicação backend na porta 3001

  - Para isso, use o seguinte comando na raiz do backend: `npm run dev`
  
  5. Volte para a raiz

  - Para isso, use o seguinte os comandos: `cd ..`
  
  6. Instale as dependências do frontend

  - Para isso, use o seguinte os comandos: `cd frontend && npm install`
  
  7. Subindo a aplicação frontend

  - Para isso, use o seguinte o comando: `npm start`
  
  </details>
  
 <details>
  <summary>
    <strong>✍ Regras de negócio</strong>
  </summary><br>

- [x] Possibilidade de pesquisar por parte do nome do funcionário
- [x] Possibilidade de pesquisar pelo departamento
- [x] Poderá editar cadastro ou excluir funcionário através de um popup
- [x] Quando clicar em novo funcionário deverá abrir um poup para cadastrar
- [x] Deverá formatar valor de salário de moeda
- [x] Deverá formatar calendário de data de nascimento
- [x] Deverá validar se o CPF é válido
- [x] Todos os campos são obrigatórios
- [x] Poderá alterar todos os dados
- [x] Se clicar em cancelar não faz a exclusão
- [x] Se clicar em excluir remove
  
 </details>  
  
<details>
  <summary>
    <strong>🗣 Me dê feedbacks sobre o projeto!</strong>
  </summary><br>

  Qualquer tipo de feedback é bem vindo para que eu possa continuar melhorando. 
   - **senamatheusjob@gmail.com**

</details>


---

  
# Especificações do projeto

---

####  1 - Rota de cadastro de funcionários

- (POST): `http://localhost:3001/employees`

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Se todos os campos estão preenchidos.
    - Segue abaixo os retornos caso o preenchimento não seja o esperado
    
    ```json
    { "message": "Name is required" }
    ```
    
    ```json
    { "message": "Department is required" }
    ```
    
    ```json
    { "message": "Salary is required" }
    ```
    
    ```json
    { "message": "Cpf is required" }
    ```
    
    ```json
    { "message": "Name must be at least 3 characters"}
    ```
    
    ```json
    { "message": "Name must be a string"}
    ```
    
    ```json
    { "message": "Department must be a string" }
    ```
    
    ```json
    { "message": "Invalid Cpf" }
    ```
    
    ```json
    { "message": "Salary must be a number" }
    ```
    
    ```json
    { "message": "Employee already exists" }
    ```

</details>

####  2 - Rota que retorna os funcionários

- (GET): `http://localhost:3001/employees`

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Retorno esperado.
    
```json
[
  {
    "id": 1,
    "name": "Fulano Diniz",
    "department": "TI",
    "salary": 2500.55,
    "cpf": "109.876.543-21",
    "birthDate": "22/12/1995"
  },
  {
    "id": 2,
    "name": "Ciclano Diniz",
    "department": "Financeiro",
    "salary": 2300,
    "cpf": "123.456.789-10",
    "birthDate": "21/02/1985"
  }
]
```

---

</details>

####  3 - Rota que edita as informações dos funcionários 

- (PUT): `http://localhost:3001/employees/:id`

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Se é possível editar o funcionário e se ele existe.
    - Segue abaixo os retornos das atualizações tanto positivo quanto negativo caso o id do funcionário não seja encontrado.
    
    ```json
    { "message": "Employee updated" }
    ```
    
    ```json
    { "message": "Employee not found" }
    ```

</details>

####  4 - Rotas de exclusão de funcionário

- (DELETE): `http://localhost:3001/register/:id`

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Se é possível excluir o funcionário e se ele existe.
    - Segue abaixo os retornos da exclusão tanto positivo quanto negativo caso o id do funcionário não seja encontrado.
    
    ```json
    { "message": "Employee deleted" }
    ```
    
    ```json
    { "message": "Employee not found" }
    ```

</details>
