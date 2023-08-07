let pool = ['12 4', '10 4', '5 3']
console.log(pool)
pool.forEach(to3)
function to3(value) {
  value = 3
}
console.log(pool) //이런건 되지않는다 아마 매개변수 value가 복사된상태로 활용되기때문일듯 원본은 변경되지않는다

let test = [1,2,5,7,8]
function split(value) {
  return value.split(' ').map(Number)
}
let tmp = pool.map(split)
let tmp2 = test.map((value) => value * 2)
console.log(tmp)
console.log(tmp2)