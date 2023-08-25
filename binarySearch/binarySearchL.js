function binarySearchL(arr, value, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] == value) {return mid}
    else if (arr[mid] < value) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1 
}

let arr = [2, 4, 6, 8, 9, 11]
console.log(binarySearchL(arr, 11, 0, arr.length - 1))

function binarySearch(arr, value, start, end) {
  while(start <= end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] == value) return mid
    else if (arr[mid] > value) end = mid - 1
    else start = mid + 1
  }
  return -1
}