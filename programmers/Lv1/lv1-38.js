//시저암호
/*
1. String.charCodeAt > 문자열의 입력index에대한 아스키코드? 반환 
// A : 65 ~ Z : 90 25개
// a : 97 ~ z : 122 25개
2. String.fromCharCode > 아스키코드의 문자열 반환
*/
const s = "a B z"
const n = 4
const strArr = [...s] //['A', 'B']
const pushedArr = strArr.map((val) => {
    let pushedChar = ''
    const curCharCode = val.charCodeAt() //32
    if(val == val.toUpperCase() && val != ' ') { // 대문자일경우
      const increasedCharCode = ((curCharCode + n) - 65) % 26 + 65
      pushedChar = String.fromCharCode(increasedCharCode)
    } else if(val == val.toLowerCase() && val != ' '){ // 소문자일경우
      const increasedCharCode = ((curCharCode + n) - 97) % 26 + 97
      pushedChar = String.fromCharCode(increasedCharCode)
    } else {
      pushedChar = ' '
    }
    return pushedChar
})
console.log(pushedArr.join(''))

//다른사람
//1
var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
//2


