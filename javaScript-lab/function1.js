const add = function(a, b) {
  return a + b
}
const addPointer = (a, b) => a + b

function calculator(func, a, b) {
  return func(a, b)
}
const a = calculator(add, 4, 8)
console.log(a);

