function selectionSort(arr) { //잘 와닿지가 않네;;; 알고리즘의 대표격 정렬알고리즘 
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}
/*
1.각단계에서 가장작은 원소를 선택한다
2.현재까지 처리되지않은 원소들중 가장 앞의 원소와 위치를교체한다
*/ 
const testArr = [2, 4, 3, 1, 9, 6, 8, 7, 5] // 고된성공
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) { // i = 0,1,2,3,4,5 
    let minIndex = i
    // console.log(`현재 최소index${minIndex}고값은${arr[minIndex]}`)
    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[minIndex] > arr[j]) {
        minIndex = j
        // console.log(`더작은index ${minIndex}고 값은 ${arr[minIndex]}`)
      }
    }
    let tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
    // console.log(`현재배열:${arr}`)
  }
  console.log(arr)
  console.log(testArr)
}
selectSort(testArr)