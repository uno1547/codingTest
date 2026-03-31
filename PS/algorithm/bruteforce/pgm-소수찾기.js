function solution(numbers) {
  
  const numberSet = new Set()
  const arr = numbers.split("")

  function makeCombination(combination, others) {
    if(combination != "") {
      numberSet.add(Number(combination))
      console.log(combination);
    }

    for (let i = 0; i < others.length; i++) {
      const picked = others[i]
      const newOthers = [...others]
      newOthers.splice(i, 1)
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

// solution("17")

// makeCombination("", numbers)

function solution2(numbers) {
  // const arr = numbers.split('') // [1, 7, 3]
  const numberSet = new Set()
  const visited = new Array(numbers.length).fill(false) // [f, f, f]


  function dfs(currentStr) {
    if(currentStr.length > 0) {
      // console.log(currentStr);
      numberSet.add(Number(currentStr))
    }

    for(let i = 0; i < numbers.length; i++) {
      if(!visited[i]) { 
        visited[i] = true
        console.log(`dfs${currentStr} + ${numbers[i]} 호출!!`);
        dfs(currentStr + numbers[i])
        visited[i] = false
      }
    }

  }
  dfs("")
  
}

solution2("17")