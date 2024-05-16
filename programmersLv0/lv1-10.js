// 하샤드수
function solution () {
  const x = 18
  const digSum = String(x).split('').reduce((acc, cur) => acc += Number(cur), 0)
  return x % digSum ? true : false
}
const x = 18
const digSum = String(x).split('').reduce((acc, cur) => acc += Number(cur), 0)
return x % digSum ? true : false