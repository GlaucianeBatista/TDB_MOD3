
//_____________( Cria uma constante para usar a biblioteca express e ver todos os itens )_______________________
const express = require("express");
//_____________( Cria uma constante com o nome app, para usar a biblioteca express )____________________________
const app = express();
//_____________( Converse a sintaxe de JavaScript do VScode para o Json do insomnia para NodeJs )_______________
app.use(express.json());

app.listen(5500, () => {
	console.log("O SERVIDOR ESTÁ RODANDONA PORTA:5500");
});

const pessoas = [{
	nome: "Glauci",
	email: "glaucianegnomo@gmail.com",
	status: true
}];

app.post("/cadastrar", (request, response) => {
	//const nome = request.body.nome;
	//const email = request.body.email;
	//const status = request.body.status;
	const data = request.body;

	console.log(data);

	data.forEach(i => {
		const { nome, email, status } = i;
		pessoas.push({ nome, email, status });
	});
	// const { nome, email, status} = request.body;


	// pessoas.push({nome,email,status});

	//return response.send('');
	//return response.send("Olá, tudo bem? Em que posso ajudar?");
	// return response.send({ nome, email, status });
	return response.send(data);


});

app.get("/consultar", (request, response) => {

	const { nome } = request.query;

	if (nome) {
		return response.send(pessoas.filter((i) => {
			return i.nome === nome;
		}));
	}

	return response.send(pessoas);

});

//_____________( Cria arrow function para acessar a porta 5500 e mostrar a frase da porta )______________________

//http://127.0.0.1:5500/ --> Cannot Get/





