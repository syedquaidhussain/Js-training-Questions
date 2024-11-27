const math = require('mathjs')

let ans = math.evaluate('[ 1+(2+3)*4-10/2 ]');
console.log(ans._data);
