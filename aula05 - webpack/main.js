//ARRAY

//vou declarar um array
//const number = [ 1, 5, 6, 8, 9, 10 ];
/*
//o map analisa todos os elementos do array e aplica o codigo desejado
//no caso, está sendo feita a multiplicacao de cada item por 10
const result = number.map(function(item, index)
{
    return item * 10;
});

console.log(result);
*/
/*
const filter = number.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);
*/
/*
const find = number.find(function(item){
    return item === 8;
});
console.log(find);
*/


//ARROW FUNCTION

/*
const result = number.map(function (item){
    return item * 10;
});

const result = number.map( item => item * 10);
console.log(result);


//se eu passar um parametro e nao definir um valor padrao, da erro
//quando eu passo um parametro somente, o outro valor vai ser o default
/*function soma (a = 3, b = 6){
    return a + b;
}
console.log (soma(1));

const sum = (a = 3, b = 6) => a + b;
console.log(sum());
*/

//DESESTRUTURACAO
/*
//criei um objeto com suas propriedades
const people = {
    name: 'Juliana',
    coffee: 'Yes',
    adress: {
        city: 'Santa Maria',
        state: 'RS'
    }
};
EXEMPLO NEGATIVO
const name = people.name;
console.log(name);

EXEMPLO POSITIVO
const {name, coffee, adress: {state}} = people;
console.log(name);
console.log(state);
*/

/*
//TEMPLATE LITERALS
//inclusao de variaveis dentro de strings
const name = 'Felipao da Massa';
const age = 28;

console.log("My name is " + name + " and I have " + age + " years old");

console.log(`My name is ${name} and I have ${age} years old`);
*/

//REST
/*
const people = {
    name: 'Juliana',
    coffee: 'Yes',
    company: 'Meta'
};

const {name, ... rest} = people;
console.log(name);
console.log(rest);

function sum (...params){
    return params.map(total => total * 10);
}
console.log(sum(1, 2, 4, 5, 6, 7));
*/

/*
//SPREAD
const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2];
console.log(array3);
*/

//aqui no sum, por ser default, posso colocar qualquer nome
//import sum, {subtraction} from './functions.js'

//importo todas as funcoes para dentro de functions (qualquer nome)
import * as functions from './functions.js';

console.log(functions.division(1,2));

console.log(functions.subtraction(1,2));