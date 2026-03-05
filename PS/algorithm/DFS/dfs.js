// 1. 재귀함수를 이용한 구현 

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
const visited2 = new Array(10).fill(false)
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

// 스택을 이용한 방법 동빈이가 말한대로 아닌가?
function dfs3(graph, v, visited) {
  const stack = [v] // 시작노드 스택에 push
  while(stack.length != 0) {
    const v = stack.pop() // 꺼내고, 방문안한 노드면 방문표시
    if (visited[v] == false) {
      visited[v] = true
      console.log(`${v}번 노드 방문`);

      for(let adj of graph[v]) {
        if (visited[adj] == false) {
          stack.push(adj) // 스택에 한번에 push가 된다!!!! 
        }
      }
      // console.log(stack);
    }
  }
}
// dfs3(graph3, 1, visited3)
// 이럴경우 방문 순서는 0 1 5 2 4 3 이 아닌 0 4 3 2 5 1이된다. 순서는 사실 상관이 없나 싶기도하고

dfs3(graph4, 0, visited4)
// 목표를 세우고 작은거라도..

