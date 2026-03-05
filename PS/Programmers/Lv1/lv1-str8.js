// 핸드폰 번호 가리기
function solution(phone_number) {
  const strArr = [...phone_number]
  for(let i = 0; i <= strArr.length - 4 - 1; i++) {
    strArr[i] = "*"
  }
}
// solution("01033334444")
function solution1(phone_number) {
  const strArr = [...phone_number]
  strArr.splice(0, strArr.length - 4, "*".repeat(strArr.length - 4))
  return strArr.join('')
}
// console.log(solution1("027778888"))

// Array.slice(start, end)
/*
start, end 둘 다 option
start가 음수면 마지막에서의 길이라고함 생략된다면 0부터
end 생략시 끝까지추출됨, 음수일경우에도 끝에서부터 길이
*/

// string.slice(sidx, eidx)
/*
sidx는 필수임!! 
sidx가 음수일경우에도 뒤에서부터 cnt / 근데 생략된다면 0이라고함??!!
eidx 생략시 끝까지추출됨, 음수일경우에도 뒤에서부터 cnt
*/
const arr = [1, 2, 3, 4, 5]
console.log(arr.slice(2, -1)); // 아마 idx2(3)부터 idx(-1 == 4)5니깐 [3, 4]