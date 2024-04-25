//Recebe os numeros e recria um array
const nums = [1, 2, 3, 3, 4, 5]

// produtoPulandoIndex(nums)

//rapido  e pouco reutilizavel
// console.log(nums.map((num, indexAtual) => {
//     let final = 1
//     for(let i in nums) {
//         i = Number(i)
//         if(indexAtual !== i) {
//             final *= nums[i]
//         }
//     }

//     return final
// }))


//maior
function produtoPulandoIndex(nums) {
    const resultado = []

    for(let i in nums) {
        const resultadoAtual = produtoEPula(i, nums)
        resultado.push(resultadoAtual)
    }

    console.log(resultado)
}


function produtoEPula(index, nums) {
    let final = 1
    for(let i in nums) {
        if(i !== index) final *= nums[i]
    }

    return final
}





//frase, deve achar a posição de fechamneto do ()

const frase = '((()))'

// console.log(getParentesisIndex(frase))


function getParentesisIndex(frase) {
    let parentesisIndex = []
    const arrayFrase = frase.split('')
    let aberturaMaisInterna = 0 

    arrayFrase.forEach((char, i) => {
        if(char == '(') {
            aberturaMaisInterna = i
            parentesisIndex.push({ start: i })
        }

        if(char == ')') {//caso seja o fechamentp
            parentesisIndex = parentesisIndex.map(dupla => {
                //atualiza essa lista
                if(aberturaMaisInterna == dupla.start) {//esse é o mais interno ainda não fechado
                    aberturaMaisInterna = redefinirMaisInterno(arrayFrase, aberturaMaisInterna)

                    //repassa o valor
                    return {
                        start: dupla.start,
                        end: i
                    }
                }

                return dupla//ou já esta certo ou vai esperar sua vez
            })
        }
    })

    return parentesisIndex
}


function redefinirMaisInterno(arrayFrase, atual) {
    let novoMaisInerno = 0

    const antigoMaisInterno = atual
    arrayFrase.forEach((char, i) => {
        if(char == '(' && i < antigoMaisInterno) {
            novoMaisInerno = i
        }
    })

    return novoMaisInerno
}




//Lista com numeros em pares, menos 1, achar ele

const lista = [1,2, 17, 1, 2, 3, 3]

function getAlone(list) {
    const alreadySeem = []
    for (let item of list) {
        if(alreadySeem.includes(item)) {
            list = list.filter(element => element !== item)
        } else {
            alreadySeem.push(item)
        }
    }

    return list[0] ?? 'Não Há nenhum'
}

// console.log(getAlone(lista))



//achar substrings (-1 se não achar)

const str = 'ghjabcdef'
const pattern = 'ghj'

function getSubIndex(str, pattern) {
    pattern = pattern.split('')
    str = str.split('')
    
    let response = - 1
    str.forEach((char, charIndex) => {
        if(char == pattern[0]) {
            let rightChars = 0

            for (let i in pattern) {
                i = Number(i)

                //não é certo
                if(pattern[i] != str[charIndex + i]) break

                rightChars++
                if(rightChars == pattern.length) {
                    response = `Starts at ${charIndex} - ends in ${charIndex + i}`
                }
            }
        }
    })

    return response
}

// console.log(getSubIndex(str, pattern))
