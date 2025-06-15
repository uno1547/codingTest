// 짝지어 제거하기

// 1. 문자열을 스캔하면서 i, i+1 의 char이 일치하면 없애기 를 짝이없을때까지 while true로 반복 
const solution = (s) => {

  let strArr = [...s]
  let noPair = false
  while(!noPair) { // 짝이 없을때까지 반복

    for(let i = 0; i < strArr.length - 1; i++) { // 처음부터 끝까지 훑으면서 i, i + 1 같으면, null처리 나중에 한번에 없앨거임
      // console.log(strArr[i+1]); // undefined
      if(strArr[i] == strArr[i + 1]) { // 만약 i = arr.length - 1, i+1 = arr.length(초과idx) 면 undefined나려나
        strArr[i] = '_'
        strArr[i+1] = '_'
      }
    }

    const prevLength = strArr.length
    strArr = strArr.filter(el => el != '_')
    const nextLength = strArr.length
    if(prevLength == nextLength) noPair = true

  }
  return strArr.length == 0 ? 1 : 0
}
// console.log(solution("baabaa"))
// console.log(solution("cdcd"))
// 시간초과
// 원인은 while 이 최악의 경우 n인데, 내부의 for, filter 이 N 이므로, N^2의 시간복잡도
// 무지성으로 하지말고, N크기보고 N이 작더라도, N^2의 코드는 만들지 말자

// 스택
const solution2 = s => {
  const stack = []
  for(let i = 0; i < s.length; i++) {

    // 어느문자건 간에 Push하거나 pop을 해야함!
    /*
    1. [] > "a" > [a] push하는경우
    2. [a] > "a" > [] pop하는경우
    3. [a] > "b" > [a, b] push하는경우

    4. 마지막에 length == 0으로 판단
    */

    if(stack[stack.length - 1] != s[i]) {
      stack.push(s[i])
    } else { // 현재 문자와 스택의 맨끝 요소를 비교 > 같다면 pop
      stack.pop()
    }
  }
  // console.log(stack);
  return stack.length == 0 ? 0 : 1
}

solution2("baabaa")
solution2("cdcd")