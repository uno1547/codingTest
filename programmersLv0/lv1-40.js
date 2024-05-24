//숫자 문자열과 영단어
/*
입력 : "1478" / "one4seven8"
"one4seveneight" > 1478
"23four5six7" > 234567
"1zerotwozero3" > 10203
*/
const s = "one4seveneight"
console.log(s.split('one'));
// console.log(s.indexOf("seven"))
const numStrTable = [
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
const strArr = []
for(let i = 0; i < numStrTable.length; i++) {
  if(s.indexOf(numStrTable[i]) != -1) {
    
  }
  console.log(s.indexOf(numStrTable[i]));
}