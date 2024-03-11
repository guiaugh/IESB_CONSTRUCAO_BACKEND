//9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Digite um numero: '))
const numero2 = Number(prompt('Digite outro numero: '))

const numeroSoma = numero1 + numero2
const resultadoFinal = numeroSoma * numero1

console.log('O valor final e: ' + resultadoFinal)