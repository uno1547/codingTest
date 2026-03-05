/* 자바스크립트로 큐를 구현하면 배열의 shift를 사용하게 되는데 push,pop과 다르게 앞에서삭제하면 뒤의 모든 요소에 대해서 재정렬이 필요하므로, 시간이훨씬오래걸린다!!
시간복잡도를 세세하게 따져야하거나, 데이터의 양이 많을경우 문제가될수있으므로, 연결리스트로 구현하자
//QUEUE 배열로 구현 시간측면에서 비효율적이라고 함
// 연결리스트로 구현해야 삽입,삭제 시간복잡도 O(1)보장
//아래는 자바스크립트 객체로 연결리스트처럼구
*/
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
  //tail 원소는 tail-1로 조회해야함!!
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