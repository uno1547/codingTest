// 백준 7562번 나이트의 이동
class Queue {
  constructor() {
    this.items = {}
    this.headIndex = 0
    this.tailIndex = 0
  }

  enqueue(item) {
    this.items[this.tailIndex] = item 
    this.tailIndex++
  }

  dequeue() {
    const item = this.items[this.headIndex]
    delete this.items[this.headIndex]
    this.headIndex++
    return item
  }

  peek() {
    return this.items[this.headIndex]
  }

  getLength() {
    return this.tailIndex - this.headIndex
  }

}
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const N = Number(input[0])

let l = 1
for(let i = 0; i < N; i++) {
  const [size, cur, des] = [Number(input[l]), input[l+1].split(' ').map(Number), input[l+2].split(' ').map(Number)]
  l+=3

  const map = {}
  const queue = new Queue()

  map[cur.join(",")] = 0
  queue.enqueue(cur)

  while(queue.getLength() != 0) {
    // console.log('현재 큐상태', queue);
    // console.log('현재 맵상태', map);
    const curCor = queue.dequeue()
    const [cX, cY] = [curCor[0], curCor[1]]

    if(cX == des[0] && cY == des[1]) {
      console.log(`좌표 ${des[0]}, ${des[1]} 까지의 거리 ${map[`${cX},${cY}`]}`)
      break 
    }

    for(let adj of [[cX-1, cY-2], [cX-2, cY-1], [cX+1, cY-2], [cX+2, cY-1], [cX+2, cY+1], [cX+1, cY+2], [cX-1, cY+2], [cX-2, cY+1]]) {
      const [aX, aY] = [adj[0], adj[1]]
      // 초과한 좌표는 pass
      if((aX < 0 || aX >= size) || (aY < 0 || aY >= size)) continue

      if(map[`${aX},${aY}`] == undefined) { // 방문한적이없을경우 거리 갱신, 방문한 좌표는 pass
        map[`${aX},${aY}`] = map[`${cX},${cY}`] + 1
        queue.enqueue(adj)
      }
    }

  }



}