const fs = require('fs')
const [N, M] = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number)
console.log(N, M);

const dequeue = [N] // 1
// [1, 2] > 3을 앞에추가 가능??? shift? 로 하던가 포인터로 가능한가??
// [1, 2] > 3을 뒤에추가 push로 간단하게 가능
// [3, 1, 2] > 3을 앞에서빼기 head포인터 증가
// [1, 2, 3] > 3을 뒤에서 빼기 pop으로 간단하게 가능
// [1, 2] > 3앞에추가
const dist = new Array(100001).fill(Infinity)
dist[N] = 0
// 걸으면 1초후 -1, 1 순간이동 0초 
// 0초면 어캐되는거지, 

// 처음도 당연히 front에서 뽑아보고 그다음 tail에서 뽑는건가?

// let head = 0
let cnt = 0
while(dequeue.length > 0) {
  // const cur = dequeue[head++]
  const cur = dequeue.shift() // 맨앞껄 꺼냄
  // cnt++
  if(cur == M) {
    console.log(dist[cur]);
    // console.log(cnt);
    break
  }

  const warp = cur * 2
  // if(warp < 100001 && dist[cur * 2] == -1) {
  if(warp < 100001 && dist[warp] > dist[cur]) {
    dequeue.unshift(warp) // 
    dist[warp] = dist[cur] + 0
  }

  for(const move of [cur - 1, cur + 1]) {
    // if(move < 100001 && dist[move] == -1) {
    if(move >= 0 && move < 100001 && dist[move] > dist[cur] + 1) {
      dequeue.push(move)
      dist[move] = dist[cur] + 1
    }
  }
  // console.log(dequeue);
}