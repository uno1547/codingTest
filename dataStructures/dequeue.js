//덱 : Deque (double ended queue)
/*
  1. head로 삽입
  2. head로 추출
  3. tail로 삽입
  4. tail로 추출
*/

class Node {
  constructor(value) {
    this.value = value
    this.next = null //앞뒤포인터둘다있는건가
    this.prev = null
  }
}

class Deque {
  constructor() {
    this.init()
  }
  init() {
    this.count = 0
    this.front = null
    this.rear = null
  }
  //unshift함수 : 새노드를 front에서 추가
  unshift(value) {
    const node = new Node(value)
    if (!this.front) { // 덱의 front가 비어있으면, front,rear가 새로만든노드 가리킴
      this.front = node
      this.rear = node
    } else { //덱의 front가 존재하면(이미 노드가 존재),front위치의 노드의 앞에생성노드를 삽입
      // 덱의 front값갱신, front노드의prev, 새노드의 next수정
      const cachedPrevFront = this.front
      cachedPrevFront.prev = node
      this.front = node
      node.next = cachedPrevFront
    }
    this.count += 1
    return this.count
  }
  //shift함수 : front의 노드를 제거
  shift() {
    if (this.count == 0) return null
    const value = this.front.value
    if (this.count === 1) {
      this.init() //1개였던거빼고, 덱초기화
    } else { //2개이상이면, front노드삭제하고 갱신
      this.front = this.front.next
      this.front.prev = null
      this.count -= 1
    }
    return value
  }
  push(value) {
    const node = new Node(value)
    if (!this.rear)
  }
}