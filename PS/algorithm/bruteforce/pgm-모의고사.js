function solution(answers) {
  const map = {
    // 1번 1 2 3 4 5 (5)
    // 2번 2 1 2 3 2 4 2 5 (8)
    // 3번 3 3 1 1 2 2 4 4 5 5 (10)
    1 : [1, 2, 3, 4, 5],
    // l : 11 이면 0 1 2 3 4 0 1 2 3 4 0
    2 : [2, 1, 2, 3, 2, 4, 2, 5],
    // l : 11 이면 
    3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  }

  const board = [0, 0, 0]

  for (let i = 0; i < answers.length; i++) {
    if(map[1][i % 5] == answers[i]) board[0]++
    if(map[2][i % 8] == answers[i]) board[1]++
    if(map[3][i % 10] == answers[i]) board[2]++ 
  }

  // [10, 1, 2] > [1]
  // [10, 15, 2] > [2]
  // [10, 15, 10] > [2]
  // [10, 15, 15] > [2, 3]

  const max = Math.max(...board)

  return board.reduce((acc, val, idx) => {
    if(val >= max) acc.push(idx)
    return acc
  }, [])
}