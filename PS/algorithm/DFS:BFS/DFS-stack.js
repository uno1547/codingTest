// 스택을 활용한 DFS(재귀와 완전 동일)은 시작노드를 스택에 넣고 시작한다.
// 이후에 꺼내고, 인접 넣고, 꺼낸거 방문처리
// 이 방식은 한번 들어갔던거 다시 들어갈수있음(아직 방문 안했다면) > 중복 발생
function dfs_with_stack(graph, startNode) {
  const stack = [startNode];
  const visited = new Array(N + 1).fill(false);

  while (stack.length > 0) {
    // 1. 스택에서 가장 위에 있는(가장 최근에 넣은) 노드를 꺼냅니다.
    const curr = stack.pop();

    // 2. 이미 방문한 노드라면 무시하고 다음으로 넘어갑니다. (매우 중요!)
    if (visited[curr]) continue;

    // 3. 방문 처리 (여기서 출력을 하거나 필요한 로직을 수행합니다.)
    visited[curr] = true;
    console.log(`${curr}번 노드 방문`);

    // 4. 인접 노드들을 스택에 넣습니다.
    // 작은 번호부터 방문하고 싶다면, 스택의 LIFO 특성상 '역순'으로 넣어야 합니다.
    for (let i = graph[curr].length - 1; i >= 0; i--) {
      const nextNode = graph[curr][i];
      
      // 아직 방문하지 않은 노드만 스택에 후보로 넣습니다.
      if (!visited[nextNode]) {
        stack.push(nextNode);
      }
    }
  }
}

function DFSwithStackOptimized(graph, startNode) {
  const stack = [startNode];
  const visited = new Array(graph.length).fill(false);
  // const path = [];

  // 1. 시작 노드를 스택에 넣으면서 동시에 방문 처리!
  visited[startNode] = true;

  while (stack.length > 0) {
    const curr = stack.pop();
    // path.push(curr); // 방문한 노드 기록
    console.log(`${curr}번 노드 실제 방문 중`);

    for (const next of graph[curr]) {
      // 2. 다음 노드를 스택에 넣기 '직전'에 방문 여부 확인 및 마킹
      if (!visited[next]) {
            // "내가 찜했음, 다른 경로나 다른 루프에서 여길 넣지 마!"
            visited[next] = true; 
            stack.push(next);
      }
    }
  }
  return path;
}