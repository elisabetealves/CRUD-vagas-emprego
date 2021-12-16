
# 🚀 CRUD - Vagas de emprego 

![image](https://media.giphy.com/media/hT9p4U8o4PsgXt1wNU/giphy.gif)

### Este é mais um repositório consolidando os meus estudos de NodeJs e MongoDB ao fazer a criação de um CRUD.

<br>

> ⚠️ O CRUD é um acrônimo para Create, Read, Update e Delete. São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose aqui estão algumas formas de fazer:


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C` REATE | insertOne() | save() |
| `R` EAD | find() | find() |
| `U` PDATE | updateOne() | save() |
| `D` ELETE | deleteOne() | remove() |

<br>

# 🧠 Contexto

O objetivo foi criar uma API onde fosse possível gerenciar vagas e candidatas. 

  - Como rodar o projeto localmente 
  - Tecnologias
  - Arquitetura
  - Requisitos, endpoints e operações
  - Dados
  - Saudações, Eli!

<br>

# ⚙️ Como rodar o projeto localmente
Siga os passos e inclua as informações abaixo:

| Passo     | Comando/informação       |
| --------- | ----------- |
| Faça o fork  | `botão de forkar` |
| ou Faça o clone  | `git clone` |
| Instale as dependências   | `npm i` |
| Crie seu .env e inclua as variáveis e os valores     | `MONGODB_URI` |
| utilize o script de start    | `npm start` |

<br>

# 🛠️ Tecnologias

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb` | Banco de dados orientado a documentos para verificar se os dados foram persistidos|
| `Postman` | Interface gráfica para realizar os testes manuais das chamadas|
| `Swagger` | Interface para descrever APIs RESTful expressas usando JSON |
  
<br> 

# 📁 Arquitetura

```
 📁 Vagas-de-emprego
   |
   |-  📁 src
   |    |- 📁 controllers
   |         |- 📑 candidataController.js
   |         |- 📑 vagaController.js
   |
   |
   |    |- 📁 data
   |         |- 📑 database.js
   |
   |
   |    |- 📁 models
   |         |- 📑 candidata.js
   |         |- 📑 vaga.js
   |
   |    |- 📁 routes
   |         |- 📑 candidatasRoutes.js 
   |         |- 📑 index.js
   |         |- 📑 vagasRoutes.js 
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 LICENSE
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 server.js

```

<br>

# 🔗 Link

### DOCUMENTAÇÃO SWAGGER 

- http://localhost:7070/api-docs/

![image](https://media.giphy.com/media/rYpV5RtmKBiXO23kwr/giphy.gif)

### Obs .: O link só mostrará a documentação quando o projeto estiver conectado, ou seja, quando o servidor estiver rodando.

<br>

# 🔃 Requisitos, endpoints e operações


GET
-   **"/index"** Deverá retorna uma pequena apresentação do projeto 
-   **"/vagas/all"** Deverá retornar todas as vagas cadastradas
-   **"/candidatas/all"** Deverá retornar todas as candidatas cadastradas

POST
-   **"/vagas/create"** Deverá criar uma vaga e retornar o objeto criado
-   **"/candidatas/create"**  Deverá criar uma candidata e retornar o objeto criado

PUT
-   **"/candidatas/[ID]"** Deverá altderar informações como o todo

PATCH
-   **"/vagas/[ID]"** Deverá alterar informação específica dentro de uma vaga por id específico e retorna o objeto alterado
-   **"/candidatas/[ID]"** Deverá alterar informação específica dentro de uma vaga por id específico e retorna o objeto alterado

DELETE
-   **"/vagas/[ID]"** Deverá deletar uma vaga e retornar uma mensagem de sucesso
-   **"/candidatas/[ID]"** Deverá deletar uma candidata e retornar uma mensagem de sucesso


REGRAS
-   Não deverá ser possível criar uma candidata ou uma vaga com o mesmo nome

<br>

#	📊 Dados requeridos

### 🙎‍♀️ CANDIDATA
- id: autogerado e obrigatório
- nome: texto e obrigatório
- areaInteresse: texto e obrigatório
- github: texto e obrigatório
- linkedin: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

✔️ RETORNO DA API
```
[
  {
    "_id": "61b14ed6747faec5f4976138",
    "nome": "Elisabete",
    "areaInteresse": "Back-end, Estágio",
    "github": "github.com/ elisabetealves",
    "linkedin": "linkedin.com/in/elisabete-a-santos/",
    "criadoEm": "2021-12-12T00:33:20.140Z",
    "__v": 0
  },
  {
    "_id": "61b14eed6593faec5f419167b",
    "nome": "Maria",
    "areaInteresse": "Estágio QA",
    "github": "github.com/mareamaciel",
    "linkedin": "linkedin.com/in/mareamaciel",
    "criadoEm": "2021-12-12T00:33:20.140Z",
    "__v": 0
  },
  {
    "_id": "61b1eece152c48438db77c76",
    "nome": "Lucas",
    "areaInteresse": "Front-end pleno",
    "github": "github.com/lucas",
    "linkedin": "linkedin.com/in/lucas",
    "criadoEm": "2021-12-12T11:54:33.147Z",
    "__v": 0
  }
]
```
<br>

### 📝 VAGA
- id: autogerado e obrigatório
- nomeVaga: texto e obrigatório
- salario: texto e obrigatório
- link: texto e obrigatório
- empresa: texto e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

✔️ RETORNO DA API
```
[
  {
    "_id": "61b14ff93feb843b76d8fa4f",
    "nomeVaga": "Front-end Jr.",
    "salario": "3500",
    "link": "devjunior.com",
    "empresa": "quero ser",
    "descricao": "Aprender e ajudar a desenvolver site de alta perfornace.",
    "criadoEm": "2021-12-09T00:38:14.033Z",
    "__v": 0
  },
  {
    "_id": "61b150203feb843b76d8fa54",
    "nomeVaga": "back end pleno",
    "salario": "5000",
    "link": "desenvolvedoresonline.com",
    "empresa": "Desenvolvedores servicos e tecnologia",
     "descricao": "Desenvolver todo sistema de back end.",
    "criadoEm": "2021-12-09T00:38:14.033Z",
    "__v": 0
  }
]
```
<br>

# 😎 Próximos passos para estudar

- Código limpo (utilização de princípios como DRY, KISS, SOLID)
- Testes (unitários, e2e, etc)

---

<br>

# 👋 Saudações, Eli!

_Caso queira contribuir com meu projeto, será totalmente bem-vindx!!!_
_Qualquer dúvida ou sugestão, chama no contatinho!_


 <img src="https://i.picasion.com/pic91/8dd880c47cfc761e805745c941097adb.gif" alt="Gif Yeah" width="200">

### Vamos nos conectar!

- [LinkedIn](https://www.linkedin.com/in/elisabete-a-santos/)
- [GitHub](https://github.com/elisabetealves)

<br>

### Feito com 💜 por Elisabete Alves

<br> 
    
# 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).
