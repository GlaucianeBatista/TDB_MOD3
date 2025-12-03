//_____________( Cria uma constante para usar a biblioteca express e ver todos os itens )_______________________
const express = require ("express");

//_____________( Cria uma constante com o nome app, para usar a biblioteca express )____________________________
const app = express();

//_____________( Cria arrow function para acessar a porta 5500 e mostrar a frase da porta )______________________
app.listen(5500, () => {
	console.log("O SERVIDOR ESTÁ RODANDONA PORTA:5500");
});

