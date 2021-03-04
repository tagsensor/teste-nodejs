const express = require('express');
const app = express();
const port = 3000;
//integrator
//const port = process.env.PORT; //para subir no integrator use essa linha

app.use(express.json()); //usando o parser do express, substitue o bodyParser a partir da versão 4.16
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use('/',require('./router/ClassesRt'));
app.use('/',require('./router/CcustosRt'));
app.use('/',require('./router/ContaAnaRt'));
app.use('/',require('./router/ContasRt'));

app.listen(port);
console.log("esta funcionando");
