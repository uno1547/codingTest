// 자릿수 더하기
const n = 123
const nStr = ["1", "2", "3"]
const ans = nStr.reduce((acc, cur) => acc += Number(cur), 0)
console.log(ans);

console.log(nStr.reduce((acc, cur) => Number(acc) += Number(cur))); // 여기서 오류남


function solution(n){
  // 쉬운방법
  return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}