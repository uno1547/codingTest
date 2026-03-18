// 3진법 뒤집기
// 26 / 3 / 13

function solution(n) {
  // 10진수를 3진수로 변환
  const tinaryString = n.toString(3)
  console.log(tinaryString);
  // 순서변환
  const reversedString = tinaryString.split('').reverse().join('')
  console.log(reversedString);
  // 다시 10진수로 변환
  const decimalString = parseInt(reversedString, 3)
  console.log(decimalString);
  // return Number(reversedString.toString())
  
}

// solution(45)
solution(125)