//문자열내에서 특정문자 횟수세기
const str = "aaaba"
let searchChar = 'a'
let cnt = 0
let fromIndex = str.indexOf(searchChar)
console.log(fromIndex);
while(fromIndex !== -1) {
  cnt++
  // console.log('cnt', cnt);
  fromIndex = str.indexOf(searchChar, fromIndex + 1)
  // console.log('fromIndex', fromIndex);
}
console.log(cnt);
//기본 반복문
let cnt1 = 0
for(let i = 0; i < str.length; i++) {
  if(str[i] == searchChar) cnt1++
}
console.log(cnt1);