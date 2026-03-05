//기사단원의 무기
const number = 10
const limit = 3
const power = 2

const knights = new Array(number).fill(1).map((val, index) => {
  return val += index
})
console.log(knights);
const atks = knights.map((val) => {
  let divisors = []
  let index = 1
  while(index <= val / 2) {
    if(val % index == 0) divisors.push(index)
    index++
  }
  divisors = [...divisors, val]
  return divisors
  /*
  for(let i = 1; i <= val; i++) {
    if(val % i == 0) divisors.push(i)
  }
  return divisors.length
  */
})

const limitedAtks = atks.map((val) => {
  return val > limit ? power : val
})
console.log(limitedAtks.reduce((acc, val) => acc += val, 0))