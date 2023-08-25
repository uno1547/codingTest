function binarySearchRC(arr, value, start, end) {
  if (start > end) return -1 //범위가 0 찾고자하는 value가 없을때, index -1 반환  
  let mid = parseInt((start + end) / 2)
  if (arr[mid] == value) return mid
  else if (arr[mid] > value) return binarySearchRC(arr, value, start, mid - 1)
  else return binarySearchRC(arr, value, mid + 1, end)
}

let arr = [2, 4, 6, 8, 9, 11]
console.log(binarySearchRC(arr, 10, 0, arr.length - 1))

function binarySearch(arr, value, start, end) {
  if (start > end) return -1
  let mid = parseInt((start + end) / 2)
  if (arr[mid] == value) return mid
  else if(arr[mid] < value) return binarySearch(arr, value, mid + 1, end)
  else return binarySearch(arr, value, start, mid - 1)
}