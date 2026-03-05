//푸드 파이트 대회
const food = 	[1, 3, 4, 6]
const numOfFoods = food.slice(1).map((val) => {
  return (val - (val % 2)) / 2
})
// console.log(numOfFoods);
const leftPart = numOfFoods.reduce((acc, val, index) => {
  if(val) {
    return acc += String(index + 1).repeat(val)
  } else {
    return acc
  }
}, '')
// console.log(leftPart);
const rightPart = [...leftPart].reverse().join('')
console.log(leftPart + 0 + rightPart);