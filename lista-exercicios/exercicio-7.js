/*7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 4 e 6. */

const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a nota 1: '))
const nota2 = Number(prompt('Digite a nota 2: '))

const mediaPonderada = (nota1 * 4 + nota2 * 6) / 10

console.log('A media ponderada do aluno e: ' + mediaPonderada)