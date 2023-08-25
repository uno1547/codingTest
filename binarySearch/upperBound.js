function upperBound(arr, value, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] > value) end = mid
    else start = mid + 1
  }
  return end
}

function upperBound(start, end, value) {
  while(start < end) {
    let mid = parseInt((start + end) / 2)
    if(arr[mid] > value) end = mid
    else start = mid + 1 //arr[mid] <= value와같음
  }
  return end
}