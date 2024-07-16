//음양 더하기
function solution() {

}
const absolutes = [4, 7, 12]
const signs = [true, false, true]
let result = 0
for(let i = 0; i < absolutes.length; i++) {
  if (signs[i]) {
    result += absolutes[i]
  } else {
    result -= absolutes[i]
  }
}
console.log(result);
/*
forEach, map, filter, reduce 등등 배열메소드와 for loop
시간상의 차이가 있는듯함
*/