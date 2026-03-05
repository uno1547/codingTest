import Queue from "./Queue.js";
/*
const queue = new Queue()
console.log(queue);
queue.enqueue("첫번째")
queue.enqueue("두번째")
queue.enqueue("세번째")
console.log(queue);

console.log(queue.getLength());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
*/
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
console.log(graph, visited);
function bfs(graph, start, visited) {
  const queue = new Queue()
  queue.enqueue(start)
  visited[start] = true
  console.log(`${start}번 방문!`);

  while(queue.getLength() != 0) { //시작노드1 들어간 상태로 시작
    const v = queue.dequeue()
    console.log(`${v}번 dequeue`);

    for(let i of graph[v]) {
      if(!visited[i]) {
        queue.enqueue(i)
        visited[i] = true
        console.log(`${i}번 방문!`);
      }
    }
  }
}

bfs(graph, 1, visited)