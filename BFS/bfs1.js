// 백준 1697번 
import Queue from "./Queue.js"
import fs from 'fs'

// const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const MAX = 100001

// const [n, k] = input[0].split(' ').map(Number)
const [n, k] = [5, 17]
const visited = new Array(MAX).fill(0)

function bfs() {
  const queue = new Queue()
  visited[n] = 1
  queue.enqueue(n)
  while(queue.getLength() != 0) {
    const cur = queue.dequeue()
    if (cur == k) {
      return visited[cur]
    }
    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      if (nxt < 0 || nxt >= MAX) continue
      if (visited[nxt] == 0) {
        visited[nxt] = visited[cur] + 1
        queue.enqueue(nxt)
      }
    }
  }
}

console.log(bfs())

/*
[5, 4, 3, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 3, 3, 4, 3, 4, 3, 3, 2, 3, 3, 4, 3, 4, 4, 0, 4, 0, 5, 0, 4, 0, 0, 0, 4, 0, 4, 4, 3, 4, 4, 0, 4, 0, 0, 0, 4, 
 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
[6, 5, 4, 3, 2, 1, 2, 3, 3, 3, 2, 3, 3, 4, 4, 5, 4, 5, 4, 4, 3, 4, 4, 5, 4, 5, 5, 0, 5, 0, 6, 0, 5, 0, 0, 0, 5, 0, 5, 5, 4, 5, 5, 0, 5, 0, 0, 0, 5, 
*/