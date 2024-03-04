//QUEUE 배열로 구현 시간측면에서 비효율적이라고 함
class Queue {
  constructor() {
    this.items = {}
    this.head = 0
    this.tail = 0
  }
  enqueue(item) {
    this.items[this.tail] = item
    this.tail++
  }
  dequeue() {
    const item = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return item
  }
  peek() {
    return this.items[this.head]
  }
  size() {
    return this.tail - this.head
  }
  isEmpty() {
    return this.head == this.tail
  }
}
//연결리스트로 직접구현한듯
class Node {
  constructor(data){  
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if(this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;
    this.rear = newNode;
    this.size++;
  }

  dequeue() {
    if(this.isEmpty()) return;
    const data = this.front.data;
    this.front = this.front.next;
    this.size--;
    return data;
  }
}