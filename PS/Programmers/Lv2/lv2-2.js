// 최솟값 만들기
const solution = (A, B) => {
  const sortedA = A.sort((a, b) => a - b)
  const sortedB = B.sort((a, b) => a - b)
  console.log(A, sortedA);
}

solution([1, 3, 2], [2, 3, 1])
//solution([1, 3, 2], [2, 3, 1])