const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
app.get('/exercicio1', (req, res) => {
    const quantidadeMinima = req.body.qtdMinima
    const quantidadeMaxima = req.body.qtdMaxima

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})

/*2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou 
uma mensagem caso o funcionário não tenha direito ao aumento.
*/

app.get('/exercicio2', (req, res) => {
    const salario = req.body.salario
    if(salario < 1000 ){
    const salarioFinal = salario + (salario * 30/100)
    res.send('Seu novo salario é: ' + salarioFinal)
    } else {
        res.send('Seu salario pemanece o mesmo')
    }
})

/*3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas 
e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. 
Escrever o nome do vendedor e seu salário total.
*/

app.get('/exercicio3', (req, res) => {
    const nome = req.body.nome
    const salarioFixo = req.body.salarioFixo
    const totalVendas = req.body.totalVendas
    const percentual = req.body.percentual

    const salarioTotal = (totalVendas * (percentual/100)) + salarioFixo

    res.send(nome + ' seu salario final sera de: ' + salarioTotal)



})

/*
4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto 
levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo 
- em km/h, e exibir a seguinte frase:
A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
*/

app.get('/exercicio4', (req, res) => {
    const nome = req.body.nome
    const distancia = req.body.distancia
    const tempo = req.body.tempo
    const velocidade = distancia / tempo

    res.send('A velocidade média do ' + nome + ' foi ' + velocidade + ' km/h.')
})

/*
5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
*/

app.get('/exercicio5', (req, res) => {
    const salario = req.body.salario
    let salarioFinal = 0

    if(salario <= 2000){
        salarioFinal = salario + (salario * 50/100)
        res.send('Seu novo salario é de: ' + salarioFinal)
    } else {
        salarioFinal = salario + (salario * 30/100)
        res.send('Seu novo salario é de: ' + salarioFinal)
    }
})

/*
6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. 
Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
*/
app.get('/exercicio6', (req, res) => {
    const altura = req.body.altura
    const sexo = req.body.sexo
    let pesoIdeal

    if(sexo == 'masculino'){
        pesoIdeal = (72.7 * altura) - 58
    } else {
        pesoIdeal = (62.1 * altura) - 44.7
    }

    res.send('Seu peso ideal é: ' + pesoIdeal.toFixed(2))
})

/*
7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
*/
app.get('/exercicio7', (req, res) => {
    const corpo = req.body
    let listaProdutos = []

    corpo.forEach(produto => {
        listaProdutos.push(produto)
    });

    let soma = 0
    listaProdutos.forEach(produto => {
        soma = soma + produto.preco
    })

    const media = soma / listaProdutos.length

    let maiorPreco = 0
    listaProdutos.forEach(produto =>{
        if(produto.preco > maiorPreco){
            maiorPreco = produto.preco
        }
    })

    const resultado = {
        precoMedia: media.toFixed(2),
        maiorPreco: maiorPreco
    }
    res.json(resultado)
})

/*
8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, 
conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e 
calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento.
Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%
*/
app.get('/exercicio8', (req, res) => {
    const salario = req.body.salario
    const cargo = req.body.cargo
    let salarioFinal
    let diferenca
    if(cargo == 101){
        salarioFinal = salario + (salario * 5/100)
    } else if(cargo == 102){
        salarioFinal = salario + (salario * 7.5/100)
    } else if(cargo == 103 ){
        salarioFinal = salario + (salario * 10/100)
    } else {
        salarioFinal = salario + (salario * 15/100)
    }

    diferenca = salarioFinal - salario

    res.send('Seu salario antigo é: ' + salario + ', seu novo salario é: '+ salarioFinal + ' e a diferença entre eles é ' + diferenca)
})

/*
9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes 
do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário
seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.
*/
app.get('exercicio9', (req, res) => {
    const salarioMinimo = req.body.salarioMinimo
    const horasTrabalhadas = req.body.horasTrabalhadas
    const dependentes = req.body.dependentes
    const horasExtras = req.body.horasExtras

    let salarioBruto
    let salarioLiquido
    
})

app.listen(port, () =>{
    console.log('Aplicação iniciada em http://localhost:3000')
})