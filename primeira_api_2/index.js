//_____________( Cria uma constante para usar a biblioteca express e ver todos os itens )_______________________
const express = require ("express");
//_____________( Cria uma constante com o nome app, para usar a biblioteca express )____________________________
const locadora = express();
//_____________( Cria arrow function para acessar a porta 5500 e mostrar a frase da porta )______________________
locadora.listen(5500, () => {
	console.log("O SERVIDOR ESTÁ RODANDONA PORTA:5500");
});
//____________________________________________________//Filmes da Locadora//____________________________________________________\\
const locadora_de_filme = [
		{
			id: "01", 
			nome: "O Espetacular Homem-Aranha", 
			gênero: "super-heroi", 
			classificação: "+12", 
			valor: "R$06,09"
		},
		{
			id: "02", 
			nome: "Homem-Aranha: Através do Aranhaverso ", 
			gênero: "super-heroi", 
			classificação: "+10", 
			valor: "R$22,80"
		},
		{
			id: "03",
			nome: "Alien, o Oitavo Passageiro", 
			gênero: "ficção cientifica", 
			classificação: "+14", 
			valor: "R$25,99"
		}
	];
//______________( consultar um endereço de site chamado pessoas, que mostra a palavra capivara )_____________________________________________________________________
locadora.get("/locadora_de_filme", (request, response) => {
	response.status(200).send(locadora_de_filme);
});

