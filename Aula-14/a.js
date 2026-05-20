var string = "isso é uma string";
let numero = 42;
const issoeumbooleano = true;
let string2 = "42";

// 1. Comparação de Strings
if (string == string2) { 
    console.log("as strings sao iguais"); 
} else { 
    console.log("as strings sao diferentes"); // Retorna: 'as strings sao diferentes'
}

// 2. Concatenação e Soma
console.log(numero + string2); // Retorna: '4242' (número vira string)
console.log(numero + numero);   // Retorna: 84 (soma matemática)

// 3. Escopo de Variáveis
var global = "eu sou uma variavel global";
{
  let local = "eu sou uma variavel local";
  console.log(global); // Retorna: 'eu sou uma variavel global'
  console.log(local);  // Retorna: 'eu sou uma variavel local'
}
// CORREÇÃO: O nome correto da variável é 'global'
console.log(global); // Retorna: 'eu sou uma variavel global'

// 4. Operações com Ponto Flutuante
let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

// CORREÇÃO: Removido o 'console.' incompleto que quebrava o código
console.log(sum.toPrecision(1)); // Retorna: '0.07'
