class ListNode {
  constructor(data) {
    this.data = data
    this.next = null //다음노드가리키는포인터
  }
}
class LinkedList {
  constructor(head = null) { //헤드포인터 미지정시 null가리킴
    this.head = head //타고가면 그게 tail이라서 head포인터 하나로 충분한듯
  }
  size() {
    let cnt = 0
    let node = this.head //시작노드
    while (node) { //헤드부터시작해서 마지막노드
      cnt++
      node = node.next
    }
    return cnt
  }
  clear() {
    this.head = null
  }
  getLast() {
    let node = this.head
    if (node) {
      while (node.next) {
        node = node.next
      }
    }
    return node
  }
  getFirst() {
    return this.head
  }
}

/* 기본구조
let node1 = new ListNode(2)
let node2 = new ListNode(4)
node1.next = node2
let list = new LinkedList(node1)
console.log(list)
*/
//삽입과삭제 
let node1 = new ListNode(3)
let node2 = new ListNode(5)
let node3 = new ListNode(7)
let list = new LinkedList(node1)
node1.next = node2
node2.next = node3
// head > node1(3) > node2(5) > node3(7) > null 인상태
console.log(list.getFirst())
// node4(1) 을 node1 , node2 사이에 삽입 head > node(3) > node()
// let node4 = new ListNode(1)
// node1.next = node4
// node4.next = node2
// console.log(list.getFirst())
// node4.next = node2
// console.log(list)