// 백준 10773 제로 성공
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
const n = input[0]
const stack = []
for(let i = 1; i <= n; i++) {
    const num = input[i]
    if(num == 0) {
        stack.pop()
    } else {
        stack.push(num)
    }
}
const ans = stack.reduce((acc, val) => acc += val, 0)
console.log(ans)

//자주 주어지는 입력형태에 유용하게 쓰일듯한 fs처리 구조분해할당 spread operator
/*
const fs = require('fs')
const [k, ...input] = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number)
console.log(k);
console.log(input);
*/