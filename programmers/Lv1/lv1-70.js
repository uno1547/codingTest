const start = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
console.log(start);
const movers = [1,5,3,5,1,2,1,4]

/*
1 > 4 [4] 1번줄 1개
5 > 3 [4, 3] 5번줄 3개
3 > 1 [4, 3, 1] 3번줄 3개
5 > 1 [4, 3] 5번줄 2개
1 > 3 [4] 1번줄 0개
2 > 2 [4, 2] 2번줄 2개
1 > x 1번줄 0개
4 > [4, 2, 4] 4번줄 1개

1번줄 0 2번줄 2 3번줄 3 4번줄 1 5번줄 2
[4, 2, 4]
*/
// 초기 게임판 상태와, 크레인작동정보를 토대로 사라진인형의 개수를 세라
/*
moves를 읽으면서 한줄씩 따지려면, 2차원배열을 뒤집어야 하나?
1,2,3,4,5 > 0,1,2,3,4

1 > arr[0][0], [1][0], [2][0], [3][0], [4][0]
2 > arr[0][1], [1][1], [2][1], [3][1], [4][1]
3 > arr[0][2], [1][2], [2][2], [3][2], [4][2]
4 > arr[0][3], [1][3], [2][3], [3][3], [4][3]
5 > arr[0][4], [1][4], [2][4], [3][4], [4][4]
*/

const basket = []
let cnt = 0
for(let i = 0; i < movers.length; i++) {
  // console.log(`크레인 이동 ${movers[i]}`);
  const lineIdx = movers[i] - 1 // 0 1 2 3 4


  for(let j = 0; j < start.length; j++) {
    const cell = start[j][lineIdx]
    // console.log('cell', cell);
    if(cell == 0) {
      // console.log('0임!');
      continue
    } // 0이면 더깊이
    basket.push(cell)
    start[j][lineIdx] = 0
    // console.log(`basket 에 cell ${cell} 추가!`);
    break
  }
  // console.log(movers[i], '크레인 이동으로 바뀐 상태' , basket);
  if(basket.length != 0 && basket[basket.length-1] == basket[basket.length-2]) { // 같으면 같은 2개 삭제 단, basket이 빈배열일때도 참으로 판별되니 미리걸러주기
    basket.splice(-2)
    cnt += 2
  }

  // console.log(start);
} 
console.log(cnt);
// console.log(basket);