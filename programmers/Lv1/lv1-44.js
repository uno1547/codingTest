//k번째수
/*
const array = [1, 5, 2, 6, 3, 7, 4]
const [i, j, k] = [2, 5 ,3]
const ans = array.slice(i - 1, j).sort((a, b) => a - b)[k-1]
console.log(ans);
*/

const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
const ans = commands.map((val) => {
  const [i, j, k] = [val[0], val[1], val[2]]
  //const [i, j, k] = vals 로하면 한번에 할당가능함
  const sliced = array.slice(i - 1, j).sort((a, b) => a - b)
  return sliced[k - 1]
})
console.log(ans);