//문자열 다루기 기본
// tmp1
function solution1(s) {
  const length = s.length
  const isNum = Number(s) 
  return (length == 4 || length == 6) && Number(s) ? true : false
}
// 위 풀이는 s = "0000" 일때 반례가 생김

// tmp2
function solution2(s) {
  const length = s.length
  let isNum
  if (Number(s)) {
    console.log(Number(s));
      isNum = true
  } else { // s = "0" 아니면 
      isNum = Number(s) == 0
  }
  return (length == 4 || length == 6) && isNum
}
//이렇게 해도 반례가 있는데 '테스트11' 뭐지?
// ㅋㅋㅋㅋ s = "0x16" 이면 Number(s)의 결과가 22가된다 저런 16,8진수 혹은 지수표현?표시가 문제였군 그래서 문자열 전체를 Number로 형변환하는것은 위험한방식같음
function solution3(s) {
  const strArr = [...s]
  const length = strArr.length
  let isNum = true
  strArr.forEach((val) => {
      isNum = isNaN(Number(val))
  })
  return (length == 4 || length == 6) && isNum
}
solution3("1234")
//정규표현식이 도대체 뭐길래 ㅋㅋㅋㅋ

function solution4() {
    const strArr = [...s]
    const length = strArr.length
    let isNum = true
    for (let char of strArr) {
        if (isNaN(char)) {
            isNum = false
            break
        }
    }
    return (length == 4 || length == 6) && isNum
}