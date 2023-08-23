function upperBound(arr, value, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] > value) end = mid
    else start = mid + 1
  }
  return end
}