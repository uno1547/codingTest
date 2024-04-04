// 재귀함수를 이용한 구현 
const graph = [ //현재 1~8번 총 8개의 노드가 존재 이를 인접 리스트로 표현한것임!!!
  [1], //0번노드의 연결노드들 일반적으로 0번노드는 간편성을위해 0번노드를 사용하지않아서, 가독성높은 노드 표현을 할수있다!! 메모리상으로 낭비는 되지만 비워두는걸 권장
  [0, 2, 3], //1번
  [1, 3, 4], //2번
  [1, 2, 4, 5], //3번
  [2, 3], //4번
  [3, 6, 7], //5번
  [5, 8], //6번
  [5], //7번
  [6], //8번
]
const visited = [false, false, false, false, false, false, false, false, false]
function dfs(graph, v, visited) { // 그래프, 현재노드, 방문처리배열
  visited[v] = true
  console.log(`${v}번노드방문!!`);
  // console.log(`${v}번노드의 인접노드들 ${graph[v]}`);
  for (n of graph[v]) {
    if(!visited[n]) { //방문하지않은 노드라면 해당노드에대해 다시 DFS수행
      // console.log(`${v}번노드의 인접한${n}번노드는 방문하지않은노드! `);
      dfs(graph, n, visited)
    } else { //방문한 노드면 종료 backTracking
      // console.log(`${n}번노드는 방문된 노드 !!`);
    }
  }
  // console.log(`${v}번노드의 인접노드 탐색완료!`);
}
dfs(graph, 0, visited)
// 스택으로는 어떻게하져
