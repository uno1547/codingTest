// 로또의 최고 순위와 최저 순위
function solution(myNums, winNums) {
  const grade = {
    6 : 1,
    5 : 2,
    4 : 3,
    3 : 4,
    2 : 5
  }
  const answer = []
  const restNums = myNums.filter((num) => num != 0) //볼수있는 내번호 개수
  const zeroNums = 6 - restNums.length //0의 개수
  // console.log(`식별불가 개수 : ${zeroNums}`);
  const restCorNum = restNums.reduce((total, num) => {
    winNums.includes(num) ? total++ : 0
    return total
  }, 0)
  // console.log(restNums);
  // console.log(`현재 맞춘 개수 : ${restCorNum}`);
  const minCorNum = restCorNum
  const maxCorNum = restCorNum + zeroNums
  const mingrade = grade[minCorNum] ? grade[minCorNum] : 6
  const maxgrade = grade[maxCorNum] ? grade[maxCorNum] : 6
  return [maxgrade, mingrade]
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))
/*
1. myNums중 0이 아닌숫자를 winNums와 비교해서 일치하는 개수구함
2. 예를 들어 myNums [0, 0, 0, 1,2,3] 이고 winNums [1, 2, 4, 8, 9, 10]
최소로맞는개수 : 2 + 0 (0, 0, 0 다틀림) > 2
최대로맞는개수 : 2 + 3 (0, 0, 0, 다맞음) > 5

myNums [0, 0, 0, 1,2,3] 이고 winNums [1, 2, 3, 8, 9, 10]
최소로맞는개수 : 3 + 0 (0, 0, 0 다틀림) > 2
최대로맞는개수 : 3 + 3 (0, 0, 0, 다맞음) > 5

myNums [0, 0, 0, 0, 0, 3] 이고 winNums [2, 11, 5, 8, 9, 10]
최소로맞는개수 : 0 + 0 (0, 0, 0 다틀림) > 0
최대로맞는개수 : 0 + 5 (0, 0, 0, 다맞음) > 5

1. myNums에서0이아닌 숫자들중 winNums에 포함되어있는개수
2. 0의 개수로 결정
*/