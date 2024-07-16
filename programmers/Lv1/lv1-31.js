//같은 숫자는 싫어

const arr = [1, 1, 3, 3, 0, 1, 1]
const row = []
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i], arr[i+1]);
  if (arr[i] == arr[i+1]) {
    continue
  } else {
    row.push(arr[i])
  }
}
console.log(row);

//위코드는 시간초과케이스가 존재함 배열크기가 100만이라서? 모르겟음
/* 와따마 진짜 
    arr.forEach((item) => {
        if (answer.length === 0) {
            answer.push(item);
        }

        if (answer[answer.length - 1] !== item) {   
            answer.push(item);
        } 
    });

    return answer;
*/
const arr1 = arr.filter((val, index) => val != arr[index+1])