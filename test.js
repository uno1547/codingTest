// 선택정렬
// 매단계에서 처리되지않은 원소중 가장작은 원소를 선택해서 앞으로 보내는 정렬방식
// 시간복잡도 O(N^2)
// 특징 : 비효율적이지만 로직이 간단하고, 
// [2,5,7,9,3,7] => [2,3,5,7,7,9]
const arr = [5,2,6,3,1,4,8,7]
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  let minIndex = i //처리되지않은 원소들중 가장 첫번째 위치 첫번째단계는 0이맞음
}

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