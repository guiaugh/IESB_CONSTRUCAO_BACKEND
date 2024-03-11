/*4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem 
do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor. */

const prompt = require('prompt-sync')();

const custoFabrica = Number(prompt('Qual custo de fabrica do carro: '))

const percentDistribuidor = custoFabrica * 28/100
const impostos = custoFabrica * 45/100
const custoFinal = custoFabrica + percentDistribuidor + impostos

console.log('O valor total do carro sera de: ' + custoFinal)