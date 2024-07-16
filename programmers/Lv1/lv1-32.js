// 3진법바꾸기
const n = 45
const trinary = n.toString(3) //
console.log(trinary);
const reversedTrinary = [...trinary].reverse().join('')
console.log(reversedTrinary);
// reversedTrinary = '0021'
let decimal = 0
for(let i = reversedTrinary.length-1, ex = 0; i >= 0; i--, ex++) {
  decimal += reversedTrinary[i] * (3 ** ex)
}
console.log(decimal);
//// 문자열을 뒤집는 3가지 방법
/*
const str = "hello"
//1. reverse, join
const strChars = [...str]
const reversedChars = strChars.reverse()
console.log(reversedChars.join(''));
//2. 반복문으로
let newStr = ''
for(let i = str.length-1; i >=0 ; i--) {
  newStr += str[i]
}
console.log(newStr);
*/
