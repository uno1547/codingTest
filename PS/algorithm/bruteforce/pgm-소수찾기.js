function solution(numbers) {
  
  const numberSet = new Set()
  const arr = numbers.split("")

  function makeCombination(combination, others) {
    if(combination != "") {
      numberSet.add(combination)
    }

    for (let i = 0; i < others.length; i++) {
      const picked = others[i]
      const newOthers = [...others].splice(i, 1)
      makeCombination(combination+picked, newOthers)
    }
  }

  function isPrime(num) {
    if(num < 2) return false
    if(num == 2) return true

    for(let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false
    }
    return true
  }
  
  makeCombination("", arr)

  let cnt = 0
  numberSet.forEach(val => {
    if(isPrime(val)) cnt++
  })

  return cnt
}

solution("17")

makeCombination("", numbers)