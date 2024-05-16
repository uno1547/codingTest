// 없는 숫자 더하기
function solution () {

}
const arr = []
for (let i = 0; i < 10; i++) {
  arr.push(i)
}
console.log(arr);
const numbers = [5,8,4,0,6,7,9] 
const restNums = arr.filter((val) => {
  return numbers.indexOf(val) < 0
})
console.log(restNums.reduce((acc, cur) => acc += cur));
/*
다른사람들은 전체합을 45로 미리 안상태로 풀기도했고
위의 
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
//다르게 만들면
const arr = Array(10).fill(1).map((val, index) => val * index)
//이렇게도 기준배열을 만듦 ㄷ 

*/
