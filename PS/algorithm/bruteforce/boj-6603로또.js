const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
console.log(input);


let tmp = ''
let i = 0
const result = []

while(input[i] != '0') {
  const [k, ...s] = input[i].split(' ').map(Number)
  console.log(`케이스 ${i+1} 전 - result:`, result); // ← 확인
  makeLotto(0, 0, k, s, result)
  console.log(`케이스 ${i+1} 후 - result:`, result); // ← 확인
  tmp += '\n'
  i++
}

console.log(tmp.trim());

function makeLotto(cnt, start, k, numbers) {
  // k개의 숫자목록 s에서 6개뽑으면됌
  if(cnt == 6) {
    tmp += result.join(' ') + '\n'
    // console.log(tmp);
    // tmp = ''
    return
  }

  for(let i = start; i < k; i++) {
    result.push(numbers[i])
    makeLotto(cnt + 1, i + 1, k, numbers)
    result.pop()
  }
}