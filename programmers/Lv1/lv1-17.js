// 나누어 떨어지는 숫자 배열
const arr = [5, 9, 7, 10]
const sortedArr = arr.sort((a, b) => a - b)
const divisor = 5
const divs = sortedArr.filter((val) => val % divisor == 0)
return (divs.length == 0) ? [-1] : divs

//동현 발견