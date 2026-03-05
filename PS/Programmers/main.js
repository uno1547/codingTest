// Array.sort(compareFunc)
const arr = [4, 4, 5, 1, 2]
//compareFunction이 양수를 반환하면 b a 순서
//compareFunction이 음수를 반환하면 a b 순서

arr.sort((a, b) => {
  if(a < b) {
    return -1
  } else if(a > b) {
    return 1
  } else {
    return 0
  }
})


arr.sort((a, b) => a - b)

// 2차원 배열 사용방법

//1. 초기값을 직접 할당 
// 5행 2열의 2차원 배열 생성
const twoDimension1 = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]

//2. 반복문
const row = new Array(5)
for(let i = 0; i < row.length; i++) {
  row[i] = new Array(2) //이렇게 하면 빈 element가 들어가있게된다
  // row[i] = new Array(2).fill(0)
}
// console.log(row);

//3. Array.from()
// Array 객체의 정적 메서드

const twoDimension2 = Array.from(Array(5), () => Array(2).fill(0))
console.log(twoDimension2);