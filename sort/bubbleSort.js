
function bubbleSort(arr) { //성공! 다르긴하지만 틀린듯
  for (let i = 1; i < arr.length; i++) { // length = 5; i = 1,2,3,4
    for (let j = 0; j < arr.length - i; j++) { // length - 1 = 4
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j] //temp = 9
        arr[j] = arr[j + 1] //
        arr[j + 1] = temp

        //arr[j] = arr[j + 1]
        //arr[j + 1] = arr[j]순차적으로 실행되므로 j+1에 j값이 들어가지못함 구조분해할당으로 해결가능!
        
      }
    }
  }
}

const arr = [9, 8, 2, 4, 3]
function bubbleSort2(arr) {
  for (let i = arr.length - 1; i > 0; i--) { //  i = 4,3,2,1 for문돌릴때 반복변수유연하게 쓸수있다.
    for (let j = 0; j < i; j++) {            // 각단계별로 마지막에 정렬된원소의인덱스
      if (arr[j] > arr[j + 1]) {             // j = 0
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j + 1] = tmp
      }
    }
  }
  console.log(arr)
}
bubbleSort2(arr)
// 24/3/21 
// 어떤 글에는 정렬되어있는 상태에선 시간복잡도가 O(N)이라는데 이게 뭔말임 break를 쓰면 비교연산 안해서 outer루프만 돈다는얘긴가
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { //길이가 4면 3번만 실행해도됌!!!
    // console.log(`${i+1}번째실행`);
    for (let j = 0; j < arr.length - 1 - i; j++) { //마지막 - 1까지 해야 undefined 발생안함
      // console.log(arr[j], arr[j + 1] );
      if (arr[j] > arr[j + 1]) {
        // console.log(`${arr[j]}가 ${arr[j+1]}보다 크므로`);
        [arr[j], arr[j + 1]] = [arr[j+1], arr[j]] //구조분해할당으로 스왑
        // console.log(`자리바꿈 ${arr[j]} ${arr[j+1]}`);
      }
    }
    // console.log(arr);
  }
}
startTime = new Date().getTime()
// console.log(startTime);

endTime = new Date().getTime()
console.log(endTime - startTime);