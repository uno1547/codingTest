// 공원 산책
// for루프에서 idx초기값이랑, 종료조건 정확하게 확인하기
const solution = (park, routes) => {
  let [x, y] = getStartCord1(park)
  console.log('시작점은', x, y);
  routes.forEach(route => {
    const [dir, dis] = route.split(" ")
    console.log('현재 명령', dir, dis);
    let dx, dy //이동해보고 조건안맞음 다시 복귀해야함
    if(dir == "E") [dx, dy] = [x, y + Number(dis)]
    if(dir == "S") [dx, dy] = [x + Number(dis), y]
    if(dir == "W") [dx, dy] = [x, y - Number(dis)]
    if(dir == "N") [dx, dy] = [x - Number(dis), y]

    console.log('임시로 이동한 위치는', [dx, dy]);
    if(dx < 0 || dx >= park.length || dy < 0 || dy >= route.length) { // 조기리턴과 중첩 If문의 차이?
      // console.log('범위를 벗어낫어요');
      return
    }
    // S[0, 0] 에서 D[0, dx] 혹은 D[dy, 0] 로 이동한 상태
    // S[2, 0] 에서 D[0, 0]로 감소, S[2, 0] 에서 D[4, 0]로 증가 방향을 정해야함;;;
    let isStuck = false
    if(x === dx) { // 수평상으로 이동 [2, 0] > [2, 2] 로  이동
      console.log('수평상이동!');
      if(y < dy) { // 수평상 시작점부터 도착점까지 훑기
        for(let i = y; i <= dy; i++) {
          if(park[x][i] == "X") {
            // console.log('수평상 이동하다가 장애물발견!');
            isStuck = true
            break
          }
        }
      } else { // 수평상 끝점부터 시작점까지 훑기
        for(let i = y; i >= dy; i--) {
          if(park[x][i] == "X") {
            // console.log('수평상 이동하다가 장애물발견!');
            isStuck = true
            break
          }
        }
      }  
    } else { // 수직상으로 이동  [0, 2] > [2, 2]  or [2, 2] > [0, 2]
      console.log('수직상이동!');
      if(x < dx) { // 수직상 시작점부터 도착점까지 훑기
        for(let i = x; i <= dx; i++) {
          if(park[i][y] == "X") {
            // console.log('수직상 이동하다가 장애물발견!');
            isStuck = true
            break
          }
        }
      } else { // 수직상 끝점부터 시작점까지 훑기
        for(let i = x; i >= dx; i--) {
          if(park[i][y] == "X") {
            // console.log('수직상 이동하다가 장애물발견!');
            isStuck = true
            break
          }
        }
      }
    }
    if(!isStuck) {
      console.log('문제없네요 이동 확정!');
      console.log(`${[x, y]}에서 ${[dx, dy]}로 이동!!`);
      [x, y] = [dx, dy] // 이동 확정
    }
  });
  // console.log('최종위치는', x,y);
  console.log(x, y);
}
/*
park	routes	result
["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1]
["SOO","OXX","OOO"]	["E 2","S 2","W 1"]	[0,1]
["OSO","OOO","OXO","OOO"]	["E 2","S 3","W 1"]	[0,0]
*/
const getStartCord = (park) => {
  let row, col
  for(let i = 0; i < park.length; i++) {
    if(!park[i].includes("S")) continue
    row = i
    for(let j = 0; j < park[i].length; j++) {
      if(park[i][j] !== "S") continue
      col = j
    }
  }
  // console.log(row, col);
  return [row, col]
}
const getStartCord1 = park => {
  // console.log(park);
  const row = park.findIndex(el => el.includes("S"))
  const col = [...park[row]].findIndex(el => el === "S")
  // console.log(row, col);
  return [row, col]
}
// solution(["SOO","OOO","OOO"],	["E 2","S 2","W 1"])
// solution(["SOO","OXX","OOO"],	["E 2","S 2","W 1"])
// solution(["OSO","OOO","OXO","OOO"],	["E 2","S 3","W 1"])
solution(["OXO", "XSX", "OXO"], ["S 1", "E 1", "W 1", "N 1"])


// getStartCord(["SOO","OOO","OOO"])
// getStartCord1(["SOO","OOO","OOO"])
// getStartCord(["OOO","OSO","OXO","OOO"])
// getStartCord1(["OOO","OSO","OXO","OOO"])