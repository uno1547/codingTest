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