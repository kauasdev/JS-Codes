const express = require('express');
// O express retorna uma função para a variável,
// essa função cria o express

const app = express();
// Essa função express() vem do módulo express, essa função cria uma
// instacia (copia do framework) para a variável

// A variável req é responsável por receber dados da requisição
// A variável res refere-se a resposta que o servidor irá enviar

app.get('/', (req, res)=>{
    // .get cria uma rota do tipo GET
    res.send('You are Welcome');
    // .send serve para enviar alguma mensagem
});

app.get('/sobre/:name/:idade/:sexo', (req, res)=>{
    // Para criar parametros utilimos :nome-do-parametro
    let name = req.params.name;
    // Para armazenar o valor de um parametro numa variavel
    // utilizamos req.params.nome-do-
    // res.send(`Hello ${name}`);
    res.send(req.params)
});

app.get('/blog', (req, res)=>{
    res.send('Blog page');
    // O .send() só pode ser utilizada uma vez por rota
});

app.get('/teste', (requ, res) => {
    res.sendFile(__dirname + '/index.html')
    // a variável __dirname retorna o cominho do diterório atual
    // .sendFile é uma das formas de enviar arquivos, mas não é a mais 
    // recomendada
});

app.listen(3000, function(){
    console.log('Server Running...')
});
// Porta que o servidor irá rodar
// A função listen tem que estar na ultima linha do código, ou seja,
// toda a sua aplicação deve ser criada acima dela.