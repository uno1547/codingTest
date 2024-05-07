// 배열 만들기 2
function solution(l, r) {
  const ans = []
  for (let i = l; i <= r; i++) {
    const stringNum = String(i)
    console.log(stringNum);
    let hasFive = false
    let hasZero = false
    let hasRest = false
    for (let char of stringNum) {
      if (char == "5") {
        hasFive = true
      } else if (char == "0") {
        hasZero = true
      } else {
        hasRest = true
        break
      }
    }
    if (hasRest) {
      console.log(`${stringNum} 은 다른숫자가 포함되있다`);
      continue
    } else { 
      ans.push(stringNum)
      console.log(`${stringNum} 은 5또는 0으로만 이루어짐`);
      continue
    }
  }
  console.log(ans);
  if (ans.length == 0) {
    return [-1]
  } else {
    return ans
  }
}

//다른 사람 풀이
function solution(l, r) {
  const result = Array.from
}
/*
*/