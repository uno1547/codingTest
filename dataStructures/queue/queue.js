//10845번 큐 틀림! 시간초과 !! console을 너무많이씀
//tail 조심!! 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let [caseNum, ...commands] = input
let ans = ""
class Queue {
  constructor() {
    this.item = {}
    this.head = 0
    this.tail = 0
  }
  enqueue(x) {
    this.item[this.tail++] = x
  }
  dequeue() {
    if(this.isEmpty()) {
      ans += `-1\n`
      return
    }
    let val = this.item[this.head]
    delete this.item[this.head++]
    ans += `${val}\n`
  }
  size() {
    ans += `${this.tail - this.head}\n`
  }
  isEmpty() {
    return ((this.head == this.tail) ? 1 : 0)
  }
  front() {
    if(this.isEmpty()) {
      ans += `-1\n`
      return
    }
    ans += `${this.item[this.head]}\n`
  }
  back() {
    if(this.isEmpty()) {
      ans += `-1\n`
      return
    }
    //큐에서 tail이아닌 tail - 1의 원소가 back임 !!
    ans += `${this.item[this.tail - 1]}\n`
  }
}
let queue = new Queue()
for (let i = 0; i < caseNum; i++) {
  let cmd = commands[i].split(' ')[0]
  let arg = commands[i].split(' ')[1]
  switch(cmd) {
    case "push":
      queue.enqueue(arg)
      break
    case "pop":
      queue.dequeue()
      break
    case "size":
      queue.size()
      break
    case "empty":
      ans += `${queue.isEmpty()}\n`
      break
    case "front":
      queue.front()
      break
    case "back":
      queue.back()
      break
  }
}
console.log(ans.trim())
