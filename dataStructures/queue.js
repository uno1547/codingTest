//QUEUE 배열로 구현 시간측면에서 비효율적이라고 함
class Queue {
  constructor () {
    this.items = []
    this.front = 0
    this.rear = 0
  }
  enqueue (item) {
    this.items.push(item)
    this.rear++
  }
  dequeue () {
    let removed = this.items.shift()
    this.front++
    return removed
  }
  peek () {
    return this.items[this.front]
  }
  size () {
    return this.rear - this.front
  }
}

class Queue { //클래스로 큐 선언
  constructor () {
    this.queue = {}
    this.front = 0
    this.rear = 0
  }
  this.enqueu() {

  }
}
queue = new Queue()
queue.enqueue(5)
console.log(queue);
queue.enqueue(2)
console.log(queue);
queue.enqueue(7)
console.log(queue)
