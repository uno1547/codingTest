//1874번 스택수열 실패 모르겟음
/*
4 3 6 8 7 5 2 1
1push [1]  +
2push [1, 2]  +
3push [1, 2, 3]  +
4push [1, 2, 3, 4]  +
4pop [1, 2, 3]  - 4
3pop [1, 2]  - 3
5push [1, 2, 5]  +
6push [1, 2, 5, 6]  +
6pop [1, 2, 5]  - 6
7push [1, 2, 5, 7]  +
8push [1, 2, 5, 7, 8]  +
8pop [1, 2, 5, 7]  - 8
7pop [1, 2, 5]  - 7
5pop [1, 2]  - 5
2pop [1]  - 2
1pop []  - 1
*/
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number)
let [caseNum, ...seq] = input
console.log(caseNum, seq)
let stack = []
let ans = ""
let start = 1
for (let i = 0; i < caseNum; i++) {
  const num = seq[i]
  while(start <= num)
}