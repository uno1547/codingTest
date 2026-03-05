/*
선택정렬 : 매 단계에서 가장 작은원소(선택안한것들중) 를 선택해 맨앞으로 보냄
시간복잡도 : O(N^2)
적은 데이터만 있을경우 간단하게 빠르게 작성할수있는 알고리즘
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
*/


/*
1.각단계에서 아직처리안된요소중 가장작은 원소를 선택한다
2.현재까지 처리되지않은 원소들중 가장 앞의 원소와 위치를교체한다
*/ 
const testArr = [2, 4, 3, 1, 9, 6, 8, 7, 5] // 고된성공

// 선택정렬
// 매단계에서 처리되지않은 원소중 가장작은 원소를 선택해서 앞으로 보내는 정렬방식
// 매번 최솟값이 맨앞으로 오게된다.
// 시간복잡도 O(N^2)
// 특징 : 비효율적이지만 로직이 간단하고, 
// [2,5,7,9,3,7] => [2,3,5,7,7,9]
const arr = [5,2,6,3,1,4,8,7]
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    let tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
}

// 2024/07/31 
// 선택정렬
// 같은걸몇번한거야 이제 제자리걸음 그만하자
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i // 0, 1, 2, 3, 4
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) { // 뒤의 원소들중 더작은원소가있다면 minIndex갱신
        minIndex = j
      }
    }
    let tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
  return arr
}
console.log(testArr);
console.log(selectionSort(testArr));

// arr = [4, 2, 1, 3]
/*
1단계
*1, 2, 4, 3
2단계
*1, *2, 4, 3
3단계
*1 *2 *3 4 (4단계 갈필요없이 끝)
4단계 
*1 *2 *3 *4


1 2 3 4
정렬되어있는 배열이라 하더라도, 뒷부분을 무조건 돌면서 minIndex와의 비교를 하기때문에 
O(N^2)

*/