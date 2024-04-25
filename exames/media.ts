const readLine = require('readline-sync')


function input(label: string): string {
    console.log(`${label}: `)
    return readLine.prompt() 
}

const notas: number = Number(input("Qunatas notas"))
const pesos = input("Pesos diferentes[s], [n]")?.toLowerCase()

var soma = 0
var baixo = notas
for (let i = 0; i < notas; i++) 
{
    const currentgrade = Number(input(`Qual a nota ${i+1}: `))
    if(pesos) {
        var currentPeso:number = Number(input("Qual o peso"))
        baixo += (currentPeso - 1)
    } 

    soma += currentgrade
}

console.log(`Nota final: ${soma/baixo}`)