const express = require("express");

const app = express();

app.use(express.json());

//_________(cria o arquivo pessoas )____________________________________

const pessoas = [
    {nome: "Glauci", telefone: "46991393033"}
];

pessoas.push({nome: "Geremias", telefone: "46991139707"});

//_________(consulta pessoas )_________________________________________

var contador  = 1;

app.get("/pessoas",(request, response)=>{
    return response.send(pessoas)
});

app.get("/pessoas/:id", (request, response) => {
    const id = request.params.id;

    const pessoa = pessoas.filter(i => i.id == id);

    if (pessoa.length <= 0) {
        return response.send({
            mensagem: "Nenhuma pessoa encontrada com esse id!"
        });
    }

    return response.send(pessoa);
});

//_________(cadastrar pessoas )_______________________________________

app.post("/pessoas", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;
    console.log(nome, telefone);

    contador ++;
    console.log(contador);

    pessoas.push({
        id : contador,
        nome,
        telefone
    });

    return response.send({nome, telefone});
});

//_________( atualizar pessoas )______________________________________
app.put("/pessoas", (request, response) => {

    const { id, nome, telefone, status } = request.body;

    if (id == undefined) {
        return response.send({
            mensagem:
                "O campo id é obrigatorio no corpo da requisição!"
        });
        }

    const pessoa = pessoas.filter(item => item.id == id);

    pessoa [0].nome = nome;
    pessoa [0].telefone = telefone;
    pessoa [0].status = status; 

    if (pessoa.length <= 0 ){
        return response.send({mensagem: "Código da pessoa inválido!"});
    }

    return response.send(pessoa);

});

//_________( Deletar pessoas )__________________________________________

app.delete("/pessoas/:id", (request, response) => {

    const { id } = request.params;
    console.log (id);

    const indexpessoas = pessoas.findIndex ( i => i.id == id);

    if (indexpessoas > -1){
         pessoas.splice(indexpessoas, 1);
         return response.send({mensagem: "Pessoa deletada com sucesso!"});
    }else {
              return response.send({mensagem: "Pessoa não encontrada"});
    }
  
});


//_________( testar código )_____________________________________________
app.listen(8080, () => {
    console.log ("O servidor está rodando na porta 8080");
});

