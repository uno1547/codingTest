// 26 / 3 / 19
// bfs로 끊어짐 파악
function solution(n, wires) {
  // 간선 정보로 인접리스트 생성
  const graph = Array.from({ length : n+1 }, () => [])
  // 4개면 [[], [], [], [], []]
  wires.forEach(([a, b]) => {
    graph[a].push(b)
    graph[b].push(a)
  });

  console.log(graph);

  let answer = n

  wires.forEach(([a, b]) => {
    const count = bfs(a, b, graph, n)
    const diff = Math.abs(count - (n - count))
    answer = Math.min(answer, diff)
  })

  function bfs(start, blocked, graph, n) {
    let count = 1;
    const queue = [start];
    const visited = new Array(n + 1).fill(false);
    
    visited[start] = true;
    
    while (queue.length > 0) {
        const curr = queue.shift();
        
        for (const next of graph[curr]) {
            // 방문하지 않았고, '끊기로 한 노드'가 아니라면 탐색 계속
            if (!visited[next] && next !== blocked) {
                visited[next] = true;
                queue.push(next);
                count++;
            }
        }
    }
    return count;
  }
}

solution(4, [[1,2], [2,3], [3,4]])


// dfs로 끊어짐 파악

function solution(n, wires) {
  // 인접리스트 초기화
  const graph = Array.from({length : n+1}, () => [])
  wires.forEach(([a, b]) => {
    graph[a].push(b)
    graph[b].push(a)
  })

  let answer = n
  // wire별로 단절시켜보며, cnt 세기
  wires.forEach(([a, b]) => {
    // 단절시 a 망의 cnt > 나머지 b 망의 cnt는 자동
    const visited = new Array(n+1).fill(false)
    const cnt = dfs(a, b, visited)
    const diff = Math.abs(cnt - (n - cnt))
    answer = Math.min(answer, diff)
  })

  
  function dfs(start, blocked, visited) {
    visited[start] = true
    let count = 1

    for (const next of graph[start]) {
      if(!visited[next] && next != blocked) {
        count += dfs(next, blocked, visited)
      }  
    }
    return count
  }
  return answer
}