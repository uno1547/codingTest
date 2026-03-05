const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
// console.log(input);

const N = Number(input[0]); // 3
const matrix = new Array(N).fill(0).map(() => new Array(N).fill(null));
// matrix[0][1] = 7
// console.log('matrix',matrix);
const likeMap = {}
const score = {
  0:0,
  1:1,
  2:10,
  3:100,
  4:1000
}

let sum = 0
for (let i = 1; i <= N*N; i++) {
  const [stu, ...favorites] = input[i].split(' ').map(Number);
  // console.log(stu, favorites); // 4 [2,5,1,7]
  likeMap[stu] = favorites;
  // const candidates = []; // 후보 좌표들
  const candidates = new Array(N).fill(0).map(() => new Array(N).fill(null)); // 1번조건후보 좌표들
  // const candidates = []; // 1번조건후보 좌표들

  // 1. 각 칸별로 인접내 좋아하는 학생 수 세기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] !== null) continue; // 빈칸이 아니면 패스
      const adjacents = [matrix[i-1]?.[j], matrix[i+1]?.[j], matrix[i][j-1], matrix[i][j+1]].filter(adj => adj !== undefined);
      const favNum = favorites.filter(fav => adjacents.includes(fav)).length; // 좋아하는 학생 수
      // candidates.push([i, j, favNum]);
      candidates[i][j] = favNum;
    }
  }
  // console.log('칸별 인접에 좋아하는사람 몇명인지', candidates);

  // 2. 좋아하는 학생 수가 가장 많은 칸들만 후보로 남기기
  const maxFav = Math.max(...candidates.flat());
  // console.log('가장 많은 좋아하는 학생 수:', maxFav);

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if (candidates[i][j] !== maxFav) {
        candidates[i][j] = null;
      }
    }
  }

  // console.log('1번 후보 칸들:', candidates);

  // 3. 1번조건 후보칸들 중에서 인접한 빈칸이 가장 많은 칸들만 후보로 남기기

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if (candidates[i][j] === null) continue; // 후보칸이 아니면 패스
      const adjacents = [matrix[i-1]?.[j], matrix[i+1]?.[j], matrix[i][j-1], matrix[i][j+1]].filter(adj => adj !== undefined);
      const emptyNum = adjacents.filter(adj => adj === null).length;
      candidates[i][j] = emptyNum;
    }
  }

  const maxEmpty = Math.max(...candidates.flat());
  // console.log('가장 많은 인접 빈칸 수:', maxEmpty);

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if (candidates[i][j] !== maxEmpty) {
        candidates[i][j] = null;
      }
    }
  }

  // console.log('2번 후보 칸들:', candidates);

  // 4. 행 번호가 가장 작은 칸, 그 중에서도 열 번호가 가장 작은 칸 선택
  let minRow = -1;
  let minCol = -1;
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if (candidates[i][j] === maxEmpty) {
        minRow = i;
        minCol = j;
        break; // 첫 번째로 발견된 칸이 행,열 번호가 가장 작음
      }
    }
    if (minRow !== -1) break; // 바깥 루프도 종료
  }
  matrix[minRow][minCol] = stu;
  // console.log('최종 matrix', matrix);
}

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      const stu = matrix[i][j];
      const adjacents = [matrix[i-1]?.[j], matrix[i+1]?.[j], matrix[i][j-1], matrix[i][j+1]].filter(adj => adj !== undefined);
      // console.log(stu, adjacents);
      // console.log(likeMap[stu]);
      const point = score[likeMap[stu].filter(fav => adjacents.includes(fav)).length];
      // console.log(`학생 ${stu}의 점수: ${point}`);
      sum += point;
    }
  }
  console.log('총 점수:', sum);
