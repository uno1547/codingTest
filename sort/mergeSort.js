function merge(arr, left, mid, right) { //정말 와닿지않음 
  console.log(arr, left, mid, right)// 병합(정복)함수 ex)merge([8], [4], )
  let i = left
  let j = mid + 1
  let k = left
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++]
    else sorted[k++] = arr[j++]
  }
  if (i > mid) {
    for(; j <= right; j++) sorted[k++] = arr[j]
  }
  else {
    for(; i <= mid; i++) sorted[k++] = arr[i]
  }
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x]
  }
}
function mergeSort(arr, left, right) { // 배열, 왼쪽 index, 오른쪽 index ex) ([7, 2, 5, 4, 8, 1, 3, 6], 0, 7)
  //원소1개면 정렬완료된 상태라고봄 console.log(arr, left, right)
  if (left < right) {
    let mid = parseInt((left+right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)
  }
}
// let arr1 = [8, 4, 6, 1, 2, 5, 7, 3]
let arr1 = [7, 2, 5, 4, 8, 1, 3, 6]
let sorted = []
// mergeSort(arr1, 0, 7)

const left = [1, 4]
const right = [2, 3]
const arr = []
// left right 배열이 주어질때 left, right를 번갈아 돌면서
/*
  1. arr=[1] / left=[4] / right=[2,3]
  2. arr=[1,2] / left=[4] / right=[3]
  3. arr=[1,2,3] / left=[4] / right = []
  4. right이 비었기 때문에 left에 남은 모든것을 arr에 추가해줍니다.
=> return arr=[1,2,3,4]
*/


function merge2(left, right) {
  const result = []
  while(left.length !== 0 && right.length !== 0) { // 양쪽중 한개라도 비면 종료
    left[0] > right[0] ? result.push(right.shift()) : result.push(left.shift())
  }
  return [...result, ...left, ...right]
  // return [...result]
}

function mergeSort2(array) {
  	// ending condition: length === 1 인 배열이 들어올 때, 정렬이 끝난 것. 
	if (array.length === 1) return array;

	// 2로 나누고 내림을 해야
	// length 가 2일 때도 안전하게 배열을 slice 할 수 있다.
	const middleIndex = Math.floor(array.length / 2); 
	const left = array.slice(0, middleIndex);
	const right = array.slice(middleIndex);
	// 재귀로 계속해서 반으로 나누면서 length 가 1이 될때까지 쪼개고, 
	// 거꾸로 올라오면서 순수한 함수인 merge에 인자로 넣어서 다시 병합되어서 최종값을 리턴한다.
	return merge2(mergeSort2(left), mergeSort2(right));
}
const merged = mergeSort2([7, 2, 5, 4, 8, 1, 3, 6])
console.log(merged);

// 선택정렬, 버블정렬, 삽입정렬 등에 비해서 훨씬 빠르게 동작한다.
// 임시정렬배열에 대한 메모리 비용이있지만, 시간측면에서 훨씬 빠르다. O(NlogN)
// 24 / 8 / 24