const arr = [2,4,3,1,5]
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
// insertionSort(arr)

// 24 / 8 / 21
// 삽입정렬 시간복잡도 O(N^2)
// 일반적인경우에 선택정렬, 버블정렬 보다 빠르게 동작한다고 함
// 각 단계에서 원소가 들어갈 위치를 찾는다(위치가 나올때까지 왼쪽으로 이동)
// 1단계에서 제일 왼쪽원소는 정렬이 되어있다고 가정한다. (왜냐 오른쪽 원소들은 왼쪽을 살펴서 자리를 찾기대문!!)
// [2, 4, 3, 1, 5]
/*
*2 4 3 1 5
1단계
j = 1 (arr[1] < arr[0] 아니므로 break) 이 break덕에 작게나마 빨라짐
*2 *4 3 1 5
2단계
j = 2 (arr[2] < arr[1] 이므로 스왑)
*2 3 *4 1 5
J = 1 (arr[1] < arr[0] 아니므로 break)
*2 *3 *4 1 5
3단계
j = 3 (arr[3] < arr[2] 이므로 스왑)
*2 *3 1 *4 5
j = 2 (arr[2] < arr[1] 이므로 스왑)
*2 1 *3 *4 5
j = 1 (arr[1] < arr[0] 이므로 스왑)
*1 *2 *3 *4 5
4단계(면 끝남)
*1 *2 *3 *4 *5
단계별로 특정원소가 본인기준 왼쪽을 살피며 들어갈 자리를 살핌 
*/
function insertionSort1(arr) {
  for(let i = 1; i < arr.length; i++) { // 반복변수 : 단계
    for(let j = i; j > 0; j--) { // 0까지 갈필요가 없느게, 시작할때 0번째 원소는 정렬된것이라고 가정했음
      // console.log(`${i}번째원소로 ${j}부터 0까지 찾는중`);
      // if(arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]] // 이러면 스왑후에 arr[i]값이 바뀌게돼서 뒤죽박죽되는듯
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      } else {
        break
      }
    }
  }
  console.log(arr);
}
insertionSort1(arr)

//// 어떤 글에는 정렬되어있는 상태에선 시간복잡도가 O(N)이라는데 이게 뭔말임 break를 쓰면 비교연산 안해서 outer루프만 돈다는얘긴가
// 최악의 경우에는 다른 정렬(삽입, 선택) 처럼 O(N^2) 이지만 최선의 경우에는 O(N)에 가까운 복잡도를 가질수있다.