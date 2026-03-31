// 26 / 3 / 25

const fs = require('fs')
const [N, M] = fs.readFileSync('./memo.txt').toString().trim().split(' ').map(Number)
// const [N, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

// console.log(N, M);

// 1 ~ N 까지 자연수중 중복없이 M개를 고른 수열 순서구분필요
// 중첩 M 개의 for문으로 할수도있을것같은데 너무 비효율적일듯

/*
N M 4 2
arr = [1 2 3 4]
4개중 3개

1 2 3
1 2 4
1 3 2
1 3 4

2 4

1 [2,3,4]
  [2] 반환
  [3] 반환
  [4] 반환

2 [1,3,4]
  [1] 반환
  [3] 반환
  [4] 반환


한개고르고 남은 수들을 재료로 만들기
*/
const arr = Array.from({length : N}, (_,idx) => idx+1)
// console.log(arr);

const result = []

function makePermutation(permutation, cnt, rest) {
  // if(permutation.length == cnt) {

  // }

  if(cnt == M) {
    result.push(permutation)
  }

  for (let i = 0; i < rest.length; i++) {
    const cur = rest[i]
    const newRest = [...rest]
    newRest.splice(i, 1)

    makePermutation([...permutation, cur], cnt + 1, newRest)
  }
}

// makePermutation([], 0, arr)

// console.log(result);
// let tmp = ''

const tmp = result.map(per => `${per.join(' ')}`).join('\n')
console.log(tmp);


console.log(N,M);

const visited = new Array(N+1).fill(false)
let result2 = ''

function dfs(depth) {
  if(depth == M) {
    result2 = result2 + result.join(' ') + '\n'
    return
  }

  for(let i = 1; i <= N; i++) {
    if(!visited[i]) {
      visited[i] = true
      result.push(i)
      dfs(depth + 1)
      result.pop()
      visited[i] = false
    }
  }
}

dfs(0)
console.log(result2);