const express = require('express');

const app = express();

//Uma rota do tipo get
//Função anônima, que usa o response como respposta caso funcione quando ele acesse o localhost
app.get('/', (request, response) => response.status(200).send("Olá"));

app.listen(3333, () => console.log('Server running or port 3333'))