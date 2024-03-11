/*1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das 
notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado 
para média inferior a 7.0.*/

const prompt = require('prompt-sync')();


const nota1 = prompt('Insira a primeira nota: ');
const nota2 = prompt('Insira a segunda nota: ');
const nota3 = prompt('Insira a terceira nota: ');
const nota4 = prompt('Insira a quarta nota: ');

const notaProva1 = Number(nota1);
const notaProva2 = Number(nota2);
const notaProva3 = Number(nota3);
const notaProva4 = Number(nota4);

const media = (notaProva1 + notaProva2 + notaProva3 + notaProva4) / 4;

if (media >= 7) {
    console.log('Aprovado! Média: ' + media);
} else {
    console.log('Reprovado! Média: ' + media);
}