// 백준 28278번 스택2 
class Stack {
  constructor() {
    this.stack = []
  }

  push(val) {
    this.stack.push(val)
  }

  pop() {
    if(this.isEmpty()) return -1
    return this.stack.pop()
  }

  length() {
    return this.stack.length
  }

  isEmpty() {
    if(this.length() == 0) return 1
    else return 0
  }

  top() {
    if(this.isEmpty()) return -1
    return this.stack[this.length() - 1]
  }
}

const fs = require('fs')
// const { setUncaughtExceptionCaptureCallback } = require('process')
let [k, ...orders] = fs.readFileSync('input.txt').toString().trim().split('\n')
k = Number(k)

const stack = new Stack()
let ans = ''
for(let i = 0; i < orders.length; i++) {
  const order = orders[i]
  if(order == '2') {
    ans += stack.pop()
    ans += '\n'
  } else if(order == '3') {
    ans += stack.length()
    ans += '\n'
  } else if(order == '4') {
    ans += stack.isEmpty()
    ans += '\n'
  } else if(order == '5') {
    ans += stack.top()
    ans += '\n'
  } else {
    const val = order.split(' ').map(Number)[1]
    stack.push(val)
  }
}
console.log(ans.trim());

