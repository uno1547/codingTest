//최소직사각형
// 기존지명함길이[w, h] 에대해서 
const nameCards = [[60, 50], [30, 70], [60, 30], [80, 40]]
const min = []
const max = []
for(let card of nameCards) {
  min.push(Math.min(...card))
  max.push(Math.max(...card))
  console.log(min, max);
}
console.log(Math.min(...min), Math.max(...max));

const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
let maxSize = [0, 0];
rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
})
return maxSize[0]*maxSize[1];
//얘는 그냥 참고
function solution(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
  return hor * ver;
}