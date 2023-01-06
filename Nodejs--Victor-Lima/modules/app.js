const soma = require('./soma.js');
const sub = require('./sub.js');
const multi = require('./multi.js');
const div = require('./divi.js');
// Usamos o require para importar um módulo tanto nativo,
// de terceiros ou que nós criamos

// O require importa e retorna um módulo para uma variável
// por exemplo

console.log(soma(1, 10));
console.log(sub(4, 8));
console.log(multi(4, 100));
console.log(div(6, 60));