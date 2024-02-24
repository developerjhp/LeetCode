const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const splitedStr = str.split('')
    const convertStr = splitedStr.map((str) => isUpperCase(str) ? str.toLowerCase() : str.toUpperCase())
    
    console.log(convertStr.join(''))
});

function isUpperCase(str) {
    return str === str.toUpperCase();
}