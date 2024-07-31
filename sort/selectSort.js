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
1.각단계에서 아직처리안된요소중 가장작은 원소를 선택한다
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

// 선택정렬
// 매단계에서 처리되지않은 원소중 가장작은 원소를 선택해서 앞으로 보내는 정렬방식
// 시간복잡도 O(N^2)
// 특징 : 비효율적이지만 로직이 간단하고, 
// [2,5,7,9,3,7] => [2,3,5,7,7,9]
const arr = [5,2,6,3,1,4,8,7]
for(let i = 0; i < arr.length; i++) { // n-1까지만 해도됨 ! 맨오른쪽 한개만 남으면 완료된상태라 봐도됨
  console.log(arr[i]);
  let minIndex = i //처리되지않은 원소들중 가장 첫번째 위치 첫번째단계는 0이맞음
}

//
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
      let tmp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = tmp
    }
  }
}