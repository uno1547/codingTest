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
// dfs(graph, 0, visited) // 재귀함수로 
// 스택으로는 어떻게하져


/*
1. 시작노드 방문처리
2. 시작노드의 인접노드 중 방문하지않은 인접노드확인
3. 2번의 인접노드들에 대해서 다시 과정 반복
*/

const graph2 = [
  [], //0번노드
  [2, 3, 4], //1번노드 
  [1, 5], //2번노드
  [1, 6, 7], //3번노드
  [1, 8, 9], //4번노드
  [2], //5번노드
  [3], //6번노드
  [3], //7번노드
  [4], //8번노드
  [4], //9번노드
]

function dfs2(graph, v, visited) {
  visited[v] = true // 방문처리

  console.log(`${v}번 방문처리`);
  //인접노드 확인
  for(let node of graph[v]) {
    if(visited[node] == false) { //인접노드가 방문하지않았다면 방문
      dfs2(graph, node, visited)
    }
  }
}
const visited2 = new Array(10).fill(false)

dfs2(graph2, 1, visited2)

// 스택을 이용한 DFS 구현
/*
1. 스택에 시작노드 push
2. 스택에서 pop, 방문처리
3. 방문처리한 노드의 인접노드(방문안한) 있다면 스택에 push
4. 스택의 길이가 0이 될때가지 2,3 번 과정을 반복한다.
*/

// 동일한 그래프에 대해서 스택DFS구현해보겟다.
const graph3 = [
  [], //0번노드
  [2, 3, 4], //1번노드 
  [1, 5], //2번노드
  [1, 6, 7], //3번노드
  [1, 8, 9], //4번노드
  [2], //5번노드
  [3], //6번노드
  [3], //7번노드
  [4], //8번노드
  [4], //9번노드
]
const visited3 = new Array(10).fill(false)
function dfs3(graph, v, visited) {
  const stack = []
  stack.push(v) // 1번 push
  console.log('시작', stack);

  while(stack.length != 0) {
    const v = stack.pop() // 꺼내고, 방문안한 노드면 방문표시
    if (visited[v] == false) {
      visited[v] = true
      console.log(`${v}번 노드 방문`);

      for(let adj of graph[v]) {
        if (visited[adj] == false) {
          stack.push(adj)
        }
      }
      console.log(stack);
    }
  }
}
dfs3(graph3, 1, visited3)