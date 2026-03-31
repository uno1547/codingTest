const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const [L, C] = input[0].split(' ').map(Number)
const alphabets = input[1].split(' ')
alphabets.sort()
const vowel = ['a','e','i','o','u']


console.log(L, C, alphabets);

// 오름차순이어야하고(서로다른 N개를 뽑기만 하면 알아서 순서 고정 즉 조합인건가), 최소 1개의 모음, 최소 2개의 자음으로 이루어져있음 
// C개의 문자중 L개 뽑기
const path = []
let tmp = ''
function dfs(cnt, start, vow, con) {
  if(cnt == L) {
    if(vow >= 1 && con >= 2) {
      // console.log(path.join(''));
      tmp += path.join('') + '\n'
    }
    return
  }

  for(let i = start; i < C; i++) {
    path.push(alphabets[i])
    if(vowel.includes(alphabets[i])) {
      dfs(cnt + 1, i + 1, vow + 1, con)
    } else {
      dfs(cnt + 1, i + 1, vow, con + 1)
    }
    // dfs(cnt + 1, i + 1)
    path.pop()
  }
}

dfs(0, 0, 0, 0)
console.log(tmp.trim());