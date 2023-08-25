function upperBound(arr, value, start, end) {
  while(start < end) {
    console.log(start, end,'탐색시작')
    let mid = (parseInt(start + end) / 2)
    console.log('mid', mid)
    if (arr[mid] > value) {end = mid 
      console.log(start, end)
    }
    else {
      start = mid + 1
      console.log(start, end)
    }
  }
  return end
}
let arr = [-10, -10, 2, 3, 3, 6, 7, 10, 10, 10]
console.log(upperBound(arr, -5, 0, 10))