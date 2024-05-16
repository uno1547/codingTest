// 문자열내 p와 y의 개수
const strArr = [..."Pyy"]
console.log(strArr);
let [p, y] = [0, 0]
console.log(p);
console.log(y);
strArr.forEach(element => {
  console.log(element);
  if((element == 'p') || (element == 'P')) {
    p++
  }
  if((element == 'y') || (element == 'Y')) {
    y++
  }
  console.log(`p : ${p} y : ${y}`);
});
console.log(p == y ? true : false);
/*
String.toUpperCase()
String.split()
정규표현식? 
*/