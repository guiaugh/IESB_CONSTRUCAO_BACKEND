/*5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem 
do distribuidor e dos impostos (aplicados ao custo de fábrica). 
Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor 
e o imposto, e calcular e escrever o custo final ao consumidor */

const prompt = require('prompt-sync')();

const custoFabrica = Number(prompt('Digite o valor de fabrica do carro: '))
const percentDistribuidor = Number(prompt('Digite o percentual do distribuidor: '))
const imposto = Number(prompt('Digite o percentual de imposto: '))

const valorPercentDistribuidor = custoFabrica * percentDistribuidor/100
const valorImposto = custoFabrica * imposto/100
const valorFinal = custoFabrica + valorPercentDistribuidor + valorImposto

console.log("O valor final do carro sera de: " + valorFinal)