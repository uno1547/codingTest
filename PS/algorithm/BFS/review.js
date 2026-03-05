class Queue {
  constructor() {
    this.items = {}
    this.headIdx = 0
    this.tailIdx = 0
  }

  enqueue(item) {
    this.items[this.tailIdx] = item
    this.tailIdx++
  }

  dequeue() {
    const item = this.items[this.headIdx]
    delete this.items[this.headIdx]
    this.headIdx++
    return item
  }

  peek() {
    return this.items[this.headIdx]
  }

  getLength() {
    return this.tailIdx - this.headIdx
  }

}
const graph = [
  [],
  [2, 3, 4],
  [1],
  [1, 5, 6],
  [1, 7],
  [3, 8],
  [3],
  [4],
  [5]
]
const visited = Array(9).fill(false)

function bfs(graph, start, visited) {
  const queue = new Queue()
  //시작노드 큐에 넣고 방문처리
  queue.enqueue(start)
  visited[start] = true

  while(queue.getLength != 0) {
    const cur = queue.dequeue() //꺼내고

    for(let adj of graph[cur]) {
      if(!visited[adj]) { //인접노드가 방문안한 노드라면
        queue.enqueue(adj) // 넣고
        visited[adj] = true // 방문처리
      }
    }
  }
}