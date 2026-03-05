class Node {
  constructor(data) {
    this.data = data
    this.link = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let cnt = 0
    let node = this.head
    while(node) { // head가 가리키는 첫번째노드부터시작, 마지막노드(next = null)일때까지 반복
      cnt++
      node = node.link
    }
    return cnt
  }

  clear() {
    this.head = null
  }

  getFirst() {
    return this.head 
  }

  getLast() {
    let node = this.head
    if(node) {
      while(node.link) { // 다음이 null 인노드를반환해야함
        node = node.link
      }
    }
    return node

    if(node) { // 중간에 노드가있는 list인경우
      while(node.next) {
        node = node.next
      }
      return node
    } else { //빈 list인경우
      return node
    }
  }
}

//노드끼리 연결처리후 LinkedList는 head포인터만 지정해주면 완료 LinkedList에서는 size, clear, getFirst, getLast등만 구현해주면됨
// 실제구현

//빈 리스트
/*
const list = new LinkedList()
console.log(list.head) //null
console.log(list.size()) //0
console.log(list.getFirst()) //null
console.log(list.getLast()) //null
*/

// Node1이 포함된 리스트
/*
const node1 = new Node(1)
const list = new LinkedList(node1)
// list.head = node1

console.log(list);
console.log(list.head);
console.log(list.size())
console.log(list.getFirst())
console.log(list.getLast())
*/

// Node1, Node2, Node3 이포함된리스트
/*
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const list = new LinkedList(node1)
node1.link = node2
node2.link = node3

console.log(list);
console.log(list.head);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());
*/
