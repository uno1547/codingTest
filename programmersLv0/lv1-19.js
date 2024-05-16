// 제일 작은 수 제거하기
function solution(arr) {
  arr.sort((a, b) => b - a)
  console.log('sort', arr);
  arr.pop()
  console.log('pop', arr);
  return (arr.length == 0) ? [-1] : arr
  //이거 틀린이유가 음 아마 원래 배열 맘대로 바꿔서 그런듯 ㅋㅋ
}

const arr = [4, 3, 2, 1]
const min = arr.reduce((acc, cur) =>Math.min(acc, cur))
const removed = arr.splice(arr.indexOf(min), 1)
return (removed.length == 0) ? [-1] : arr

//참고로 배열에서 최솟값구할때
Math.min(...arr)
//이게 엄청간단 min메소드의 매개변수개수제한이없구나