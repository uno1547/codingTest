//숫자 문자열과 영단어
/*
입력 : "1478" / "one4seven8"
"one4seveneight" > 1478
"23four5six7" > 234567
"1zerotwozero3" > 10203
*/

/*
originStr = originStrArr.join('')
console.log(originStrArr);
console.log(originStr);
*/

const s = "123"
let originStr = s
const originStrArr = [...s]
const ans = []
const numStr1Table = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
]
const numStr2Table = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
]
while(originStrArr.length != 0) {
  let curStr 
  for(let i = 0; i < 10; i++) {
    if(originStr.indexOf(numStr1Table[i]) == 0) {
      console.log(`${numStr1Table[i]}가 ${i}번째 문자`);
      curStr = numStr1Table[i]
      ans.push(i)
      break
    }
    if(originStr.indexOf(numStr2Table[i]) == 0) {
      console.log(`${numStr2Table[i]}가 ${i}번째 문자`);
      curStr = numStr2Table[i]
      ans.push(i)
      break
    }
  }
  originStrArr.splice(0, curStr.length)
  originStr = originStrArr.join('')
}
console.log(ans.join(''));
/* 다른사람
const s = "one4seven8"
let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var answer = s;

for(let i=0; i< numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
    console.log(answer);
}


*/