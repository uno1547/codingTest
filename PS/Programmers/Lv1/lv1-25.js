//문자열 내림차순으로 배치하기 
const str = "Zbcdefg"
console.log("a" < "A"); // 이게 false라는건 A가 더 작다는말임
//그냥 str.sort를하면(compare함수 미제공) 시에 오름차순이되기에 따로 compare함수 제공해서 순서 정해줘야함
//g > f 는 정해져있음 따라서 순서를 정해주려면 오름차순원하면 음수를 반환해야하고 내림차순을 원하면 양수를 반환해야함??
function solution(s) {
  const strArr = s.split('').sort(function(a, b) {
      if (a < b) { //ex) "a" < "b" 일때 리턴값이 0보다 작으면 prev가 next보다 낮은 index로 설정
          return 1 //이면 b 다음 a
      } else if(a > b) {
          return -1
      } else {
          return 0
      }
  })
  return strArr.join('')
  
}
console.log(strArr)
//array.sort함수의 compare함수는 음수를 반환하면 prev가  next보다 먼저온다