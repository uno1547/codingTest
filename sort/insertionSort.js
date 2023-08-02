const arr = [2,4,3,1,9]
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) { //i = 1,2,3,4,5 단계
    for (let j = i; j > 0; j--) { 
  //for (let j = i; j > 0; j--) for loop 내에서 arr[j] 로접근할때 어짜피 j+1해줘야함 j = i 로 하는게깔끔한듯
      if (arr[j] < arr[j -1]) { //자신왼쪽에 더큰수 만남 여기에 i로 조건판별은 아래에서 자리바뀐후 뒤죽박죽됨
        let tmp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
      } else {
        break // j루프빠져나감 왼쪽은 어짜피 정렬되어있는상태이기에 자기보다 작은데이터넣으면 그위치에서 break로 빠져나가고 그 왼쪽은 볼필요가없다 효율적
      }
    }
  }
  console.log(arr)
}
insertionSort(arr)