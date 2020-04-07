const express = require("express");
const cors = require('cors'); //5.2k (gzipped: 2.1k);
const routes = require("./routes"); //puxando a variavel do arquivo routes

const app = express();

app.use(cors());
app.use(express.json()); //Informando ao express que estamos usando json.
app.use(routes);
app.listen(3333);

//Rota e /recurso

/**Métodos HTTP
GET: Buscar informações no Back-end
Post: Criar uma informação no Back-end ex:Cadastro
Put: Alterar Informação no Back-end
Delete: Deletar uma informação no Back-end
*/

/** Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos.
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. (ex: cadastrar usuario)
*/

/** Bancos de dados:

Bancos SQL: MySQL, SQLite, PostgreSQL, Oracle, Micrisoft SQL Server.
NoSQL: MongoDB,CouchDB, etc.

*/

