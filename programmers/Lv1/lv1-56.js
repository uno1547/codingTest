// 덧칠하기

function solution(n, m, section) {
  let cnt = 0
  const wall = Array.from({length : n}, () => 1)
  section.forEach((val) => {
      wall[val - 1] = 0
  })
  console.log(wall)
  while(true) {
      let start = wall.indexOf(0)
      let end = start + m - 1
      while(end > wall.length - 1) { //롤러가 삐져나가는경우 start재조정
          start -= 1
          end -= 1
      }
      
      for(let i = start; i <= end; i++) { // 유효한 범위에 대해 페인트 칠
          wall[i] = 1
      }
      cnt++
      
      if(wall.indexOf(0) == -1) break
  }
  return cnt
}

// m 롤러의 길이가 길어지면, start, end조절 횟수가 많아짐 > 매우 비효율적임

// function solution(n, m, sections) {
//     var answer = 0;
//     var painted = 0;
//     for(var section of sections) {
//         if(painted < section) {
//             answer++;
//             painted = section+m-1;
//         }
//     }
//     return answer;
// }