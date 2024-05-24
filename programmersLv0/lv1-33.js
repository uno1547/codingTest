// 크기가작은 부분문자열
const t = "500220839878"
const p = "7"
let cnt = 0
for(let i = 0; i <= t.length - p.length; i++) {
  const sliced = t.slice(i, i + p.length)
  Number(sliced) <= Number(p) ? cnt++ : 0
}
console.log(cnt);
//문자열에서 +"3" > 3으로 형변환가능