const express = require('express');
const { v4: uuidv4 } = require('uuid');
// a v4 gera o uuid com números randomicos
const app = express();
app.use(express.json());

const costomers = [];

function verifyIfExistAccountCPF(req, res, next){
    //next é uma função que server para deixar a requisição continuar
    //caso não seja chamado a requisição fica parada no middleware

    const { cpf } = req.headers;

    const costomer = costomers.find(costomer => costomer.cpf === cpf);

    if(!costomer){
        return res.status(404).json({
            error: true,
            message: 'Costumer not found',
        });
    }

    req.costomer = costomer;
    //para passar dados de middlewares para as rotas setamos esse valor no
    //request

    return next();
}

function getBalance(statement){

    const balance = statement.reduce((accumulator, operation) => {
        if(operation.type === 'Credit'){
            return accumulator + operation.amount;
        }else{
            return accumulator - operation.amount;
        }
    }, 0);

    return balance;
}

app.post('/account', (req, res) => {
    const { cpf, name } = req.body;
    
    const costomerAlreadyExist = costomers.some(costomer => costomer.cpf === cpf);

    if(costomerAlreadyExist){
        return res.status(400).json({
            error: true,
            message: 'Costumer already exist!',
        })
    }

    costomers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: [],
    });

    console.log(costomers)
    return res.status(201).send()
    //201 http status code usado pra quando algo é criado
});

/**
 * app.use(verifyIfExistAccountCPF)
 * .use => aplica o middleware para todas as rotas
 */

app.get('/statement', verifyIfExistAccountCPF, (req, res) => {
    //passando como argumento para rota ele é aplicado só na rota

    const { costomer } = req;
    //usamos a desestruturação para recuperar esses dados


    return res.status(200).json(costomer.statement);
});

app.post('/deposit', verifyIfExistAccountCPF, (req, res) => {
    const { description, amount } = req.body;
    const { costomer } = req;

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: 'Credit',
    };

    costomer.statement.push(statementOperation);

    return res.status(201).send();
});

app.post('/withdraw', verifyIfExistAccountCPF, (req, res) => {
    const { amount } = req.body;
    const { costomer } = req;

    const balance = getBalance(costomer.statement);

    if(balance < amount){
        return res.status(400).json({
            error: true,
            message: 'Insufficient funds!',
        });
    }

    const statementOperation = {
        amount,
        created_at: new Date(),
        type: 'Debit'
    }

    costomer.statement.push(statementOperation);

    return res.status(201).send();
});

app.get('/statement/date', verifyIfExistAccountCPF, (req, res) => {
    const { date } = req.query;
    const { costomer } = req;

    const dateFormat = new Date(date + ' 00:00');

    const statement = costomer.statement.filter(statement => statement.created_at.toDateString() === new Date(dateFormat).toDateString());

    return res.status(200).json({
        error: false,
        statement,
    })
});

app.put('/account', verifyIfExistAccountCPF, (req, res) => {
    const { name } = req.body;
    const { costomer } = req;

    costomer.name = name;

    return res.status(201).send();
});

app.get('/account', verifyIfExistAccountCPF, (req, res) => {
    const { costomer } = req;

    return res.status(200).json({
        error: false,
        costomer,
    });
});

app.delete('/account', verifyIfExistAccountCPF, (req, res) => {
    const { costomer } = req;

    costomers.splice(costomer, 1);
    console.log(costomers)

    return res.status(200).json({
        error: false,
        costomers,
    });
});

app.get('/balance', verifyIfExistAccountCPF, (req, res) => {
    const { costomer } = req;

    const balance = getBalance(costomer.statement);

    return res.status(200).json({
        error: false,
        balance,
    });
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Running on port ${port}`);  
});