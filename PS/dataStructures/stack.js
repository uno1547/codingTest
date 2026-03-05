//스택
/*
특징 : 먼저들어온게나중에나가는 자료구조(FILO, LIFO)
연산 : push O(1), pop O(1), top O(1), empty O(1)
*/


//stack을 js로 구현 배열로 간단하게 구현가능
//1.배열
// push메서드 O(1), pop메서드 O(1)
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

//1-2 클래스로 스택선언
class Stack {
  constructor() {
    this.stack = []
    this.length = stack.length
    // this.length = 5
  }

  push(val) {
    if(this.isFull()) {
      return
    }
    this.stack.push(val)
  }

  pop() {
    if(this.isEmpty()) {
      return 'empty!!'
    }
    return this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return (this.length == 0)
  }

  // isFull() {
  //   return this.length == this.stack.length
  // }
}

//2.연결리스트
// 연결리스트로도 스택을 구현할수있다.
// 삽입, 삭제에 있어 O(1)을 보장할수있다.
// 머리포인터만 있으면되고, 삽입삭제는머리에서일어난다.