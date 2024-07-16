// x만큼 간격이 있는 nro
function solution(x, n) {
  const arr = []
  for(let i = 0; i < n; i++) { // 
    arr.push(x + x * i)  
  }
  console.log(arr);
}
solution(2, 5)