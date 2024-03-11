/*2. Escreva um script para ler o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores.*/

const prompt = require('prompt-sync')();

const totalEleitores = Number(prompt('Digite o numero total de eleitores: '))
const totalVotosBrancos = Number(prompt('Digite a quantidade de votos Brancos: '))
const totalVotosNulos = Number(prompt('Digite o numero de votos nulos: '))
const totalVotosValidos = Number(prompt('Digite o total de votos validos: '))

const totalVotos = totalVotosBrancos + totalVotosNulos + totalVotosValidos

if((totalVotos > totalEleitores) || (totalVotos < totalEleitores)) {
    console.log('O numero de votos não é igual ao numero de eleitores, reveja os numeros e calcule novamente')   
} else{
    const percentualVotobranco = (totalVotosBrancos / totalEleitores) * 100
    const percentualVotoNulo = (totalVotosNulos / totalEleitores) * 100
    const percentualVotoValido = (totalVotosValidos / totalEleitores) * 100

    console.log('O percentual de votos brancos e: ' + percentualVotobranco + '%')
    console.log('O percentual de votos nulos e: ' + percentualVotoNulo + '%')
    console.log('O percentual de votos validos e: ' + percentualVotoValido + '%')
}

