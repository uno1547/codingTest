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
function mergeSort(arr, left, right) {
  console.log(arr, left, right)
  if (left < right) {
    let mid = parseInt((left+right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)
  }
}
let arr1 = [8, 4, 6, 1, 2, 5, 7, 3]
let sorted = []
mergeSort(arr1, 0, arr1.length - 1)