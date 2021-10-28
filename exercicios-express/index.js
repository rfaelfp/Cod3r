const { application } = require("express");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario");
require("./api/produto")(app, "com param!");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(saudacao("Guilherme"));

app.use("/opa", (req, res) => {
  res.json({
    nome: "ipad 32gb",
    price: "1899.99",
    discount: 0.15,
  });
});

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  // let corpo = ''
  // req.on('data', function(parte) {
  //     corpo += parte
  // })

  // req.on('end', function() {
  //     res.send(corpo)
  // })
  res.send(req.body);
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

app.listen(3000, () => {
  console.log("Backend executando");
});
