// 예산
const d = [2,2,3,3]
const budget = 10
let cnt = 0
d.sort((a, b) => a - b)
d.reduce((acc, val) => {
  console.log(val);
    acc += val
  console.log(`현재 비용 ${acc}`);
    if(acc <= budget) cnt++
    return acc
}, 0)
console.log(cnt);