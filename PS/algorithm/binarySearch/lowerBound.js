function lowerBound(arr, value, start, end) { //arr내에서 value가 들어갈수있는 index의 최솟값반환 ([3,4,5,5,6,7], 5) > 2
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] >= value) end = mid 
    else start = mid + 1
  }
  return end
}

function lowerBound(start, end, value) { // array에서 value이상인 수가 처음으로 등장하는 index반환
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] >= value) end = mid
    else start = mid + 1
  }
  return end
}