const answers = [1,2,3,4,5,1,2,3,4,5];
const firstCnt = answers.reduce((acc, val, index) => {
  if(val == (index % 5) + 1) acc += 1
  return acc
}, 0)

// tmp   2 1 2 3 2 4 2 5 2 1 2 3 2 4 2 5
// index 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
const secondCnt = answers.reduce((acc, val, index) => {
  if(index % 2 == 0) {
    console.log(2);
  } else {
    let tmp = (Math.floor(index / 2)) // 0 1 2 3 4 5 6 7 8
    if(tmp % 4 == 0) {
      acc += ((tmp % 4) + 1 == val) ? 1 : 0
    } else {
      acc += ((tmp % 4) + 2 == val) ? 1 : 0
    }
  }
  /*
  if(index % 2 == 0) {
    acc += (val == 2) ? 1 : 0
  } else {
    index = (Math.floor(index / 2))
    if(index % 4 == 0) {
      // console.log(index);
      acc += (val == index + 1) ? 1 : 0
    } else {
      // console.log(index);
      acc += (val == index + 2) ? 1 : 0
    }
  }
  return acc
  */
}, 0)
// console.log(secondCnt);

const thirdTmp = "3311224455".repeat(1000).split('').map(Number)
const thirdCnt = answers.reduce((acc, val, index) => {
  acc += (val == thirdTmp[index]) ? 1 : 0
  return acc
}, 0)
const scores = [firstCnt, secondCnt, thirdCnt]
console.log(scores);
// const scores = [3, 3, 5]
const maxScore = Math.max(...scores)
const indexes = scores.reduce((nums, val, index) => {
  if(val >= maxScore) nums.push(index+1)
    return nums
}, [])
/*
[0,1,0] > [2]
[0,1,1] > [2,3]
[1,1,1] > [1,2,3]
*/
other([1,2,3,4,5])
//나머지 연산을 써서 했네 나는 뭔짓을 한거지 ㅋㅋㅋ
function other(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for(let i = 0; i < answers.length; i++) {
      if(answers[i] == man1[i % man1.length]){
        count[0]++;
      } 
      if(answers[i] == man2[i % man2.length]) {
        count[1]++;
      }
      if(answers[i] == man3[i % man3.length]) {
        count[2]++;
      }
  }
  /*
  const max = Math.max(count[0], count[1], count[2]);
  for(let i = 0; i < count.length; i++) {
      if(max == count[i]) answer.push(i + 1);
  }
  */
  return answer;
}