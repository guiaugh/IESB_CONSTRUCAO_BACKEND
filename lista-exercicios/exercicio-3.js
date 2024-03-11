/*3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário. */

const prompt = require('prompt-sync')();

const salario = Number(prompt('Digite seu salario: '))
const reajuste = Number(prompt('Digite o percentual de reajuste: '))

const salarioFinal = (salario * reajuste/100) + salario

console.log("Seu novo salario é de: " + salarioFinal)