//x만큼 간격이 있는 n개의 숫자
function solution() {
  let x = 2
  const d = x
  const end = 5
  const seq = []
  for (let i = 0; i < end; i++) { //end번 반복
    seq.push(x)
    x += d
  }
  console.log(seq);
}

const x = 2
const end = 5
console.log(Array(end).fill(x).map((val, index) => (index + 1) * val))
/* 다른사람의 풀이 


*/