//이상한 문자 만들기
function solution1(s) {
  const words = s.split(" ")
  const newWords = words.map((val) => {
    const strArr = [...val]
    const tmpArr = strArr.map((val, index) => {
        if(index % 2 == 0) {
            return val.toUpperCase()
        } else {
            return val.toLowerCase()
        }
    })
    console.log(tmpArr);
    return tmpArr.join('')
  })
  return newWords.join(' ')
}
function solution2(s) {
  const str = "try hello world"
  return str.split(' ').map((val) => val.split('').map((v, i) => i % 2 == 0 ? v.toUpperCase() : v).join('')).join(' ')
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}


