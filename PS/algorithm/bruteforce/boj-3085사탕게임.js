// 26 / 3 / 24
const fs = require('fs');
const input = fs.readFileSync('./memo.txt').toString().trim().split('\n')

console.log(input);
const n = Number(input[0])

const matrix = []
for(let i = 1; i <= n; i++) {
  matrix.push([...input[i]])
  // matrix.push(input[i].trim().split(''))
}
console.log(matrix);

/*
현재 사탕배치에서
모든 인접한두개 선택 방법 찾기 (색이 다른 두개임 또)
모든 인접한두개 선택 순회하면서, 색깔별 부분길이 구하기 그중 최댓값 선택 및 갱신
*/

// 서로다른 색의 인접한 두개 찾기
// 모든 칸을 다돌면서 각 칸별로 상하좌우 상태를 따진다? 오른쪽과 아래만 탐색하면 중복없이 인접하는 모든 경우를 따질수있음 그러게
// 굳이 따로 조합 따지지말고 전체 순환하되 , 인접한게 나왔을때만 탐색 및 원상복귀

// console.log(Math.max(2, 2));
let finalMax = getLongest(matrix)
// console.log('초기화!');
// console.log(finalMax);

for(let i = 0; i < matrix.length; i++) {
  for(let j = 0; j < matrix.length; j++) {
    const cur = matrix[i][j]
    // console.log(`현재칸 ${cur}`);
    // const [left, up, right, down] = [matrix[i][j-1], matrix[i-1][j], matrix[i][j-1], matrix[i+1][j]]
    // console.log(`left ${left} up ${up} right ${right} down ${down}`);
    

    if(j + 1 < matrix.length) { // 인접 오른쪽 확인
      // console.log(`오른쪽은 ${matrix[i][j+1]}`);
      [matrix[i][j], matrix[i][j+1]] = [matrix[i][j+1], matrix[i][j]];
      finalMax = Math.max(finalMax, getLongest(matrix));
      // console.log(`오른쪽 탐색후 ${finalMax}`);
      // console.log(getLongest(matrix));


      /*
      const result = getLongest(matrix)
      // console.log(`오른쪽 swap 후 result: ${result}, finalMax before: ${finalMax}`);
      finalMax = Math.max(finalMax, result)
      // console.log(`오른쪽 swap 후 finalMax: ${finalMax}`);
      */
      [matrix[i][j], matrix[i][j+1]] = [matrix[i][j+1], matrix[i][j]];
    }

    if(i + 1 < matrix.length) { // 인접 아래 확인
      // console.log(`아래쪽은 ${matrix[i+1][j]}`);
      [matrix[i][j], matrix[i+1][j]] = [matrix[i+1][j], matrix[i][j]];
      finalMax = Math.max(finalMax, getLongest(matrix));
      // console.log(`아래쪽 탐색후 ${finalMax}`);


      /*
      const result = getLongest(matrix)
      // console.log(`아래쪽 swap 후 result: ${result}, finalMax before: ${finalMax}`);
      finalMax = Math.max(finalMax, result)
      // console.log(`아래쪽 swap 후 finalMax: ${finalMax}`);
      */
      [matrix[i][j], matrix[i+1][j]] = [matrix[i+1][j], matrix[i][j]];
    }

    // console.log(`현재칸 ${cur} 에 대한 maxCnt ${finalMax}\n`);
  }
}

console.log(finalMax);

function getLongest(matrix) {
  let maxCnt = 1
  const n = matrix.length

  for(let i = 0; i < n; i++) {
    let rowCnt = 1
    let colCnt = 1
    
    for(let j = 0; j < n - 1; j++) { // 와 인덱스 범위 고정해두고, i,j만 바꿔 껴서 오른쪽왼쪽을 outofrange없이 따지는구나;;

      if(matrix[i][j] == matrix[i][j+1]) {
        rowCnt++
      } else {
        rowCnt = 1 // 예외처리 ...
      }

      maxCnt = Math.max(maxCnt, rowCnt)

      if(matrix[j][i] == matrix[j+1][i]) {
        colCnt++
      } else {
        colCnt = 1
      }

      maxCnt = Math.max(maxCnt, colCnt)
    }
  }
  // console.log(`maxCnt의 결과 ${maxCnt}`);
  // console.log(maxCnt);
  return maxCnt
}