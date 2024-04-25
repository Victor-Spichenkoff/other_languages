const size = 20
let char = '01'

function generatePiramid() {
    if(char.length > 1) char = char.slice(1)
    for(let i = 1; i < size + 1; i++) {
        const thisLine = ' '.repeat(size - i) + char.repeat( i * 2 - 1 )
        console.log(thisLine)
    }
}

generatePiramid()




const teste = ['nhe', 'n', 'nh', 'a']
console.log(teste.every(item => item.includes('n')))
// for( let line = 1; line < size + 1; line ++) {
//     console.log(' '.repeat(size - line) + '*'.repeat(line * 2 - 1))
// }