// 2798번
// 26 / 3 / 21

/*
const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = fs.readFileSync('./memo.txt').toString().split('\n')
const [N, jack] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number)

// 오름차순 정렬하기
numbers.sort((a, b) => a - b)

let maxSum = 0
// 반복하기
for (let i = 0; i < numbers.length - 2; i++) {
  for (let j = i + 1; j < numbers.length - 1; j++) {
    for (let k = j + 1; k < numbers.length; k ++) {
      let sum = numbers[i] + numbers[j] + numbers[k]
      console.log(`${numbers[i]} ${numbers[j]} ${numbers[k]} 의 합은 ${sum}`);
      if(sum <= jack && sum >= maxSum) {
        console.log(`기존 maxSum ${maxSum} 보다 sum이 크므로 ${sum} 갱신`);
        maxSum = sum
      }
    }
  }
}

console.log(maxSum);
*/

// 재귀로직으로 조합 만들기 이건 블랙잭이랑 무관
function makeCombination(arr, r) {
  const result = []

  function combination(start, cnt, chosen) {
    if(cnt == r) {
      result.push([...chosen])
      return
    }

    for(let i = start; i < arr.length; i++) {
      /*
      const picked = arr[i]
      combination(i + 1, cnt + 1, [...chosen, picked])
      */
      chosen.push(arr[i])
      combination(i + 1, cnt + 1, chosen)
      chosen.pop() // chosen참조를 건들였으니, 원상복구 해줄필요있음
    }
  }

  combination(0, 0, [])
}

// 재귀로직으로 다시풀기

const fs = require('fs')
const input = fs.readFileSync('./memo.txt').toString().trim().split('\n')

const [N, jack] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number)

console.log(N, jack);
console.log(numbers);

let answer = 0
function makeCombination(start, cnt, currentSum) {
  if(currentSum > jack) return

  if(cnt == 3) {
    answer = Math.max(answer, currentSum)
    return
  }

  // 재귀를 통한 currentSum 갱신
  for(let i = start; i < numbers.length; i++) {
    const picked = numbers[i]
    makeCombination(i + 1, cnt + 1, currentSum + picked)
    // currentSum - picked 
    // 배열을 넘겨줄땐 참조에의한 호출이라서 문제가되었지만 합의경우는
    // 값에 의한 호출이라서 해줄 필요없는 로직
  }
}

makeCombination(0, 0, 0)
console.log(answer);


// 10개중 서로다른 3개를 뽑는 모든 경우의 수

/*
let answer = 0;
const visited = new Array(numbers.length).fill(false);

function dfs(cnt, currentSum) {
  // 가지치기: 합이 이미 넘었으면 중단
  if (currentSum > jack) return;

  // 3장을 다 뽑았을 때
  if (cnt === 3) {
    answer = Math.max(answer, currentSum);
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!visited[i]) { // 아직 안 쓴 카드라면
      visited[i] = true;   // [선택]
      dfs(cnt + 1, currentSum + numbers[i]); // [재귀]
      visited[i] = false;  // [해제] (백트래킹 핵심)
    }
  }
}
*/