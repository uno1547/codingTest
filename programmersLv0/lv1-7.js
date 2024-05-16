//정수 제곱근 판별
// 주어진 입력값의 범위를 보자!! 시간초과의 가능성이 보일정도의 범위라면 신중히 생각해야함!!
function solution() {
  const n = 121
  const subMulArr = []
  for(let i = 1; i <= n; i++) {
    if(n % i == 0) subMulArr.push(i)
  }
  //아마 위에서 시간초과가 난듯함
  console.log(subMulArr);
  if (n.length % 2 != 0) {
    const mid = Math.floor()
    return (subMulArr[Math.floor(n.length / 2)]+1)**2
  } else {
    return -1
  }
}
function solution2() {

}
const n = 195
const sqr = Math.floor(Math.sqrt(n))
console.log(sqr);
console.log(sqr ** 2);
let ans = (sqr ** 2 == n) ? (sqr+1) ** 2 : -1
console.log(ans);