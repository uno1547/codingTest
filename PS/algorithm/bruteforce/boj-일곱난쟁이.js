// 26 / 3 / 21
// 난쟁이는 9명, 키의 합은 100고정

const fs = require('fs')
const heights = fs.readFileSync('./memo.txt').toString().trim().split('\n').map(Number).sort((a, b) => a - b)


console.log(heights);

// 재귀 브루트포스
/*
cnt = 7 이될때까지 반복하고, 100과 일치하면 break
*/
const path = []
let flag = false

function search(start, cnt, sum) {
  if(flag) return
  if(sum > 100) return

  /*
  if(cnt == 7 && sum == 100) {
    console.log(path.join('\n'));
    found = true
    return
  }
  */

  if(cnt == 7) {
    if(sum == 100) {
      flag = true
      console.log(path.join('\n'));
    }
    return
  }

  for(let i = start; i < heights.length; i++) {
    const curr = heights[i]
    path.push(curr)
    console.log(`path는 ${path}`);
    search(i + 1, cnt + 1, sum + curr)
    path.pop()
  }
}

search(0, 0, 0)



// 발상의 전환
/*
9명의 총합을 구해두고, 빼서 100이되게하는 조합의 두명을 찾기!
9명의 키의 합을 구하고
뺐을때 100이되게하는 2명을 먼저 찾는다?
*/

/*
const heightSum = heights.reduce((acc, val) => acc += val, 0)
const reverseSum = heightSum - 100

heights.sort((a, b) => a - b)

let first = 0
let second = 0

let found = false
for(let i = 0; i < heights.length - 1; i++) {
  for(let j = i + 1; j < heights.length; j++) {
    const sum = heights[i] + heights[j]
    if(sum == reverseSum) {
      heights[i] = 0
      heights[j] = 0
      break
    }
  }
  if(found) break
}

const smurfs = heights.filter(val => val != 0)
for(const tmp of smurfs) {
  console.log(tmp);
}
*/