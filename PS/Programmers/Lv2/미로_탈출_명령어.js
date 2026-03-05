/*
미로 탈출 명령어
x,y에서 출발해 r,c로 이동하는데 k번 움직여야함
탈출한 경로를 문자열로 나타냈을때, 사전순으로 가장 빠른 경로 반환
k번 움직여서 도달할 수 없는 경우 "impossible" 반환

길이가 k되면서, r,c에 도달하는 경로를 모두 구함 (만약 없으면 impossible반환)
만약 탐색 도중 r,c에 도달했다면(k는 불만족) 해당 순간을 기록하고 탐색종료(근데 이게)

해당 순간부터 다시 탐색시작, K
*/
function solution(n, m, x, y, r, c, k) {

  // 무조건 포함되는 최단 경로 구하기
  // 도착지 E (r, c) - 출발지 S (x, y) = (r - x) + (c - y)
  const dx = r - x; // 양수라면 도착지가 출발지보다 아래에 있음, 음수면 위
  const dy = c - y; // 양수라면 도착지가 출발지보다 오른쪽에 있음, 음수면 왼쪽
  // console.log(`dx ${dx} dy ${dy}`);
  const root = []
  // x 차이만큼
  for(let i = 1; i <= Math.abs(dx); i++) {
    root.push(dx > 0 ? "d" : "u")
  }
  // y 차이만큼
  for(let i = 1; i <= Math.abs(dy); i++) {
    root.push(dy > 0 ? "r" : "l")
  }

  console.log(root);
  root.sort((a, b) => {
    if(a < b) return -1
    else if (a > b) return 1
    else return 0
  })
  
  console.log(root);

  // impossible검사
  if(((k - root.length) % 2 != 0) || k - root.length < 0) return "impossible"


  // 남은 길이 / 2에 대해서 d l r u 
  const remainder = (k - root.length) / 2 // 2라면 
  // remainder 값이 0일때까지 반복, E(r, c)
  while(remainder) {
    // 아래로 가는게 우선

    // d를 넣을수있으면 넣음

    // l 넣을수이
  }

}
console.log(solution(3, 4, 2, 3, 3, 1, 5))
// solution(2, 2, 1, 1, 2, 2)
// console.log(solution(3, 3, 1, 2, 3, 3, 4))

//////////////////////////////////////////////// 그리디 ?
function solution(n, m, x, y, r, c, k) {
  const directions = [
    ['d', 1, 0],
    ['l', 0, -1]
    ['r', 0, 1],
    ['u', -1, 0],
  ]

  const minDist = Math.abs(r-x) + Math.abs(c-y);

  if(minDist > k || (k - minDist) % 2 !== 0) return "impossible"

  let path = ""
  let cx = x
  let cy = y
  let movesLeft = k

  while(movesLeft > 0) {

    for(const [dir, dx, dy] of directions) {
      const nx = cx + dx
      const ny = cy + dy
      const distToEnd = Math.abs(r - nx) + Math.abs(c - ny) // 이동할경우 E까지의 거리
      const remaining = movesLeft - 1 // 이동 후 남은 이동횟수

      if(nx >= 1 && nx <= n && ny >= 1 && ny <= m && distToEnd <= remaining && (remaining - distToEnd) % 2 === 0) {
        path += dir
        cx = nx
        cy = ny
        movesLeft--
        break
      }

    }
    

  }
  return path
}