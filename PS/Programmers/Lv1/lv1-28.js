// 행렬의 덧셈
function solution(arr1, arr2) {

}
const arr1 = [[1,2],[2,3]]
const arr2 = 	[[3,4],[5,6]]


const ans = []
for (let i = 0; i < arr1.length; i++) {
    ans[i] = new Array(arr1[i].length)
}
// const ans = new Array(arr1.length).fill(0).map(() => new Array(arr2.length).fill(0))
// const ans = Array.from(Array(arr1.length), () => new Array(arr2.length))
//주의 array.fill의 인수로 객체가 제공되면, 해당객체의 참조가 전달되기에 의도치않은 동작을한다
// 2차원배열 만들때 fill을 쓸거면 객쳋가 아닌 값으로 채우자 
for(let i = 0; i < ans.length; i++) {
  console.log('행번호', i);
    for(let j = 0; j < ans[i].length; j++) {
      console.log('열번호', j);
      console.log('현재 요소', i, j);
      // console.log('ans', ans);
      ans[i][j] = arr1[i][j] + arr2[i][j]
    }
}
console.log(ans);
//2차원배열 생성방법 아래방법들은 행과 열의 개수에 접근 가능할경우에만 사용가능한 방법
//직접초기화
const mat1 = [[1, 2], [3, 4]]

//반복문
const mat2 = new Array(2)
for(let i = 0; i < mat2.length; i++) {
  mat2[i] = new Array(2)
}
// console.log('mat2 :', mat2);

//array.from으로 가능
const mat3 = Array.from(Array(2), () => new Array(2))
// console.log('mat3 :', mat3);

//array.fill, map
const mat4 = new Array(2).fill(0).map(() => new Array(2))
// console.log('mat4 :', mat4);

//
const mat5 = new Array(2).fill(new Array(2))
// console.log('mat5: ', mat5);
const mat6 = new Array(arr1.length).fill(new Array(arr2.length).fill(0))
//mat6을 생성한 방법은 array.fill때문에 의도치않은 동작을 하게 된다. fill은 값을 채울때만 사용하자 
// console.log(mat6);


//다른사람풀이 map을 두번섯음 대단하네 ㄷㄷ
arr1.map((val, index) => {
  console.log(val);
  console.log(`val : ${val} index : ${index}`);
  return val.map((v, i) => {
    console.log(`v : ${v} i : ${i}`);
    return v + arr2[index][i]
  })
})