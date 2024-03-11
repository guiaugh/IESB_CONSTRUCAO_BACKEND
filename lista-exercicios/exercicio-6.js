/*6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo 
e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */

const prompt = require('prompt-sync')();

const carrosVendidos = Number(prompt('Quantos carros foram vendidos: '))
const valorTotalVendas = Number(prompt('Qual valor total das vendas dos carros: '))
const salarioFixo = Number(prompt('Digite o salario fixo: '))
const valorCarroVendido = Number(prompt('Digite o valor recebido por carro: '))

const valorCarrosVendidos = carrosVendidos * valorCarroVendido
const comissaoValorVendas = valorTotalVendas * 5/100
const salarioFinal = salarioFixo + valorCarrosVendidos + comissaoValorVendas

console.log('O salario final sera de: ' + salarioFinal)
