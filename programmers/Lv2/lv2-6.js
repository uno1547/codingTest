// 다음 큰 숫자
const solution = (n) => {
  const digitNum = n.toString(2).split('').reduce((acc, val) => {
    if(val == '1') acc++
    return acc
  }, 0)
  console.log('n의 1개수',digitNum);

  let tmp = n
  while(true) {
    tmp += 1
    const tmpDigit = tmp.toString(2)
    const tmpDigitNum = tmpDigit.split('').reduce((acc, val) => {
      if(val == '1') acc++
      return acc
    }, 0)
    console.log(`tmp ${tmp}의 1개수${tmpDigitNum}`);
    if(digitNum == tmpDigitNum) break
  }
  console.log(tmp);
  
}

// solution(3)
// solution(5)
solution(78)
solution(15)