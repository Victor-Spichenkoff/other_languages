//palindromo --> arara

// const p = 'araraa'
const p = 'abcCBA'
function isPalindromo(text:string) {
    const arrayFromText = text.toLowerCase().split('')
    let result = true
    for(let i = 0; i < arrayFromText.length; i++) {
        const back = p.length - 1 - i
        if(arrayFromText[i] !== arrayFromText[back]) result = false
    }

    return result
}


// ordenação de array
const array = [5, 4, 3, 1]
// const array = [1, 4, 2, 3, 1]
function sortArray(array: number[] | string[]) {
    let final: any[] = []
    array.forEach(item => {
        let thisIndex = -1
        final.forEach((finalItem, i )=> {
            if(item > finalItem) {
                //reset (tira o outro))
                if(thisIndex != -1) {
                    final = final.filter((item, i) => i != thisIndex )
                    
                }
                thisIndex = i + 1
                final.push(item)
            }
        })
    })

    return final
}

console.log(sortArray(array))