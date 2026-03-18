// 크기가 작은 부분문자열 
// 26/3/5

function solution (t, p) {
  const length = p.length
  let result = 0
  for(let i = 0; i <= t.length - length; i++) {
    const tmp = t.slice(i, i+length)
    console.log(tmp);
    if(Number(tmp) <= p) result++
  }
  console.log(result);
  return result
}

// solution("3141592", "271")
// solution("500220839878", "7")
// solution("10203", "15")