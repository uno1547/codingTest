const arr = [6,8,3,6,2,5,9,1,4]
arr.sort()
console.log(arr)
/*
sort메서드의 매개변수인 comparefunction 의 반환값에 따라 정렬이 이루어딘다.
sort((a, b) => value)
value < 0 인경우 a b순서로 정렬
value > 0 인경우 b a순서로 정렬
value = 0 인경우 순서 변경안함
*/

function compare1(a, b) {
  if (a < b) {
    return -1
  }
  else if (a > b) {
    return 1
  }
  else return 0 
}
//arr.sort(compare1)
function compare2(a, b) { //ascending
  return a - b
} 
function compare3(a, b) { //descending
  return b - a
}
//arr.sort(compare2)
arr.sort(function(a, b) { //익명함수로 comparefunction넣어줄수있다
  return a - b
})

let arr2 = [20,9]
console.log(arr2.sort()) // comparefunction를 명시하지않을경우, 기본적으로 문자열변환후 사전순으로 비교하기때문에, 숫자정렬을 원할때,comparefunction을 꼭넣어줘야한다

let arr3 = [5,4,3,2,1]
function compareFn1(a, b) { //a,b의 순서와는상관없이 그냥 return값의 부호에따른 순서만기억해두자
  return a - b // 오름차순
}
function compareFn2(a, b) { //내림차순
  return b - a
}
function compareFn3(b, a) { //내림차순
  return a - b
}
function compareFn4(b, a) { //오름차순
  return b - a
}
console.log(arr.sort(compareFn1))
console.log(arr.sort(compareFn2))
console.log(arr.sort(compareFn3))
console.log(arr.sort(compareFn4))
//comparefunction의 리턴값을 잘설정해주면 원하는대로 정렬가능하다