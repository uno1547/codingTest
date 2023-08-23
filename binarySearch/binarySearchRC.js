function binarySearchRC(arr, value, start, end) {
  if (start > end) {return -1}
  let mid = parseInt((start + end) / 2)
  if (arr[mid] == value) {return mid}
  else if (arr[mid] > value) {return binarySearchRC(arr, value, start, mid - 1)}
  else return binarySearchRC(arr, value, mid + 1, end)
}

let arr = [2, 4, 6, 8, 9, 11]
console.log(binarySearchRC(arr, 10, 0, arr.length - 1))