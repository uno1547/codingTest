// 음양 더하기 
function test(absolute, signs) {
  return absolute.reduce((acc, val, idx) => {
    acc += signs[idx] ? val : -val
    return acc
  }, 0)
}
console.log(test([1,2,3], [false,false,true]));