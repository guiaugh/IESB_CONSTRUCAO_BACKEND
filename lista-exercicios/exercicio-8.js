/*8. Faça um script que determine o volume de uma caixa d’água cilíndrica, 
sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura */

const prompt = require('prompt-sync')();

const raio = Number(prompt('Qual valor do raio: '))
const altura = Number(prompt('Digite a altura: '))

const volume = Math.PI * (raio * raio) * altura

console.log('O volume da caixa e: ' + volume.toFixed(2))