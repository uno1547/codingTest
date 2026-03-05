// 가운데 글자 가져오기
// const s = "his"
// const length = s.length
// if (length % 2 == 0) { //길이가 짝수
//   const mid = length / 2
//   const [mid1, mid2] = [mid - 1, mid]
//   return s[mid1]+s[mid2]
// } else { //길이가 홀수
//   const mid = length / 2
//   return s[mid]
// }
//String 의 substring메소드
// 길이가 3인 his > i mid = 1
// 길이가 2인 he > he mid = 0
const s = "he"
const length = s.length //3
const mid = Math.ceil(length / 2) - 1 // 0
console.log(length, mid);
console.log(s.substring(mid, length % 2 == 0 ? mid + 2 : mid + 1))
