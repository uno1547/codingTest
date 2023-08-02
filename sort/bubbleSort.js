/*
function bubbleSort(arr) { //성공! 다르긴하지만 틀린듯
  for (let i = 1; i < arr.length; i++) { // length = 5; i = 1,2,3,4
    for (let j = 0; j < arr.length - i; j++) { // length - 1 = 4
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j] //temp = 9
        arr[j] = arr[j + 1] //
        arr[j + 1] = temp

        //arr[j] = arr[j + 1]
        //arr[j + 1] = arr[j]순차적으로 실행되므로 j+1에 j값이 들어가지못함 
        
      }
    }
  }
}*/
const arr = [9, 8, 2, 4, 3]
function bubbleSort2(arr) {
  for (let i = arr.length - 1; i > 0; i--) { // 이건 내림차순코드인듯 i = 4,3,2,1 for문돌릴때 반복변수유연하게 쓸수있다.
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