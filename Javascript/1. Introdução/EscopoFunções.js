/*Um escopo é definido sempre que abrirmos 
ou fechamos uma chave, e serve para evitar
os conflitos de nome
*/

//escopo global = SEMPRE fora de chaves = Acessível em qualquer lugar do código
function sum(n1, n2) {
  //escopo local = SEMPRE entre chaves({}) = Acessível apenas para o código dentro das chaves
  var result = n1 + n2;
  return result;
}
//escopo global = SEMPRE fora de chaves = Acessível em qualquer lugar do código
console.log("A soma de 3+3 usando a função criada para soma é: " + sum(3, 3));

var result = "Recebe qualquer outra coisa além da função";
console.log(result);
/*
Mesmo tendo uma variável result na função, posso "atribuir 2 valores pra ela"
Já que criei ela na função, apenas num escopo LOCAL, dando outro valor pra ela no escopo GLOBAL
Assim, não entrando em conflito os dois valores.
*/
