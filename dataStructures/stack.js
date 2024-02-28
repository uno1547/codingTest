//stack을 js로 구현 배열로 간단하게 구현가능
const stack = []
stack.push(5)
stack.push(2)
stack.push(3)
stack.push(7)
console.log(stack)
//[5, 2, 3, 7]
console.log(stack.pop()) // top원소 확인하려면 pop된값 출력하면됌
console.log(stack)
stack.push(4)
console.log(stack)
//그냥 배열의 push, pop 은 똑같다 !! top함수만 구현해주면 될듯
let reversed = stack.slice().reverse()
console.log(reversed)