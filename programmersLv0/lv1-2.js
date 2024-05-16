// 문자열을 정수로바구기
const str = "-123"
console.log(Number(-123));
let strArr = [...str]
if (strArr[0] == '-') { //첫글자가 부호면
  ans = 1
} else if (strArr[0] == '+') {

}
const each = strArr.map(Number)
/*형변환*/