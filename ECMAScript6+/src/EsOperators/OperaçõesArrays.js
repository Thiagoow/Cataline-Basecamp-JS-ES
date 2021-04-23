/*
Até o ES5, podíamos apenas definir uma variável
com o comando "var". Agr, a partir do ES6, podemos
definir uma var, usando também: "const" e "let", que são
definições de variáveis que NÃO permitem que a variável saia do escopo

"const" --> Permite mutações nas variáveis
"let" --> Quando precisamos reatribuir um valor
*/

//-------------Operações com ARRAYS

//1--------- Passando os dados de um vetor pra outro:
const numbers = [1, 2, 3, 4, 5];
//Define o novo vetor E(a partir do ()) muda as propriedades do antigo com uma função
const newNumbers = numbers.map(function (number) {
  return number + 1;
});
console.log("Ex 1:");
console.log(numbers);
console.log(newNumbers);

//2--------- Reduz todos os valores da ARRAY E(a partir do ()) soma todos eles com uma função
const total = numbers.reduce(function (total, next) {
  return total + next;
});
console.log("Ex 2:");
console.log(total);

//3------- Filtrando os dados de um array:
const toDo = [
  { text: "lavar a louça", done: false },
  { text: "levar o lixo pra fora", done: true },
  { text: "dobrar as roupas", done: true },
];

//Filtra os toDo marcados como "done: true"
const doneToDo = toDo.filter(function (toDos) {
  return toDos.done;
});
console.log("Ex 3:");
console.log(doneToDo);

//Filtra apenas um dado de uma array:
const find = toDo.find(function (toDosSearch) {
  return toDosSearch.text === "dobrar as roupas";
});
console.log(find);

//Filtra o index de um array com vários objetos:
//(Lembre-se que uma array sempre inicia seu index em 0)!!
const findIndex = toDo.findIndex(function (toDosSearchIndex) {
  return toDosSearchIndex.text === "lavar a louça";
});
console.log(findIndex);
//Se fosse um array simples (sem objetos), bastava fazer:
// console.log(toDo.indexOf("lavar a louça"));

//4-----------Vê se existe algum dado na array com o "some":
const cars = ["fusca", "civic", "celta"];

const searchingCar = cars.some(function (searchCar) {
  return searchCar === "fusca";
});
console.log(searchingCar);
//Se houver na array o dado digitado, ele retorna "true", se nn ele retorna "false"
