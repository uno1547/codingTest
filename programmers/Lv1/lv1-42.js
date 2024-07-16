//문자열 내마음대로 정렬하기 

const strings = ["abce", "abcd", "cdx"]
const n = 2
strings.sort((a, b) => {
  if(a[n] < b[n]) {
    return -1
  } else if(a[n] > b[n]){
    return 1
  } else {
    return a > b ? 1 : -1
  }
})
console.log(strings);