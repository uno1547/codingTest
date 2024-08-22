
function bubbleSort(arr) { //성공! 다르긴하지만 틀린듯
  for (let i = 1; i < arr.length; i++) { // length = 5; i = 1,2,3,4
    for (let j = 0; j < arr.length - i; j++) { // length - 1 = 4
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j] //temp = 9
        arr[j] = arr[j + 1] //
        arr[j + 1] = temp

        //arr[j] = arr[j + 1]
        //arr[j + 1] = arr[j]순차적으로 실행되므로 j+1에 j값이 들어가지못함 구조분해할당으로 해결가능!
        
      }
    }
  }
}

const arr = [9, 8, 2, 4, 3]
// DB의 코드
function bubbleSort2(arr) {
  // i = 4; i > 0
  for (let i = arr.length - 1; i > 0; i--) { //  i = 4,3,2,1 for문돌릴때 반복변수유연하게 쓸수있다.
    for (let j = 0; j < i; j++) {            // 각단계별로 마지막에 정렬된원소의인덱스
      if (arr[j] > arr[j + 1]) {             // j = 0
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j + 1] = tmp
      }
    }
  }
  console.log(arr)
}
// bubbleSort2(arr)
// 24/3/21 
// 어떤 글에는 정렬되어있는 상태에선 시간복잡도가 O(N)이라는데 이게 뭔말임 break를 쓰면 비교연산 안해서 outer루프만 돈다는얘긴가
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { //길이가 4면 3번만 실행해도됌!!!
    // console.log(`${i+1}번째실행`);
    for (let j = 0; j < arr.length - 1 - i; j++) { //마지막 - 1까지 해야 undefined 발생안함
      // console.log(arr[j], arr[j + 1] );
      if (arr[j] > arr[j + 1]) {
        // console.log(`${arr[j]}가 ${arr[j+1]}보다 크므로`);
        [arr[j], arr[j + 1]] = [arr[j+1], arr[j]] //구조분해할당으로 스왑
        // console.log(`자리바꿈 ${arr[j]} ${arr[j+1]}`);
      }
    }
    // console.log(arr);
  }
}


// 24/8/21
// 버블 정렬 시간복잡도 O(N^2)
// arr : [9, 8, 2, 4, 3]
/*
1단계(i = 0)
8 9 2 4 3
8 2 9 4 3
8 2 4 9 3 
8 2 4 3 *9
2단계
2 8 4 3 9
2 4 8 3 9
2 4 3 *8 *9
3단계
2 4 3 8 9
2 3 *4 *8 *9
4단계
2 *3 *4 *8 *9
5단계 
끝
*/
// 단계랑 연산횟수따져볼려면 가장쉽게 len = 3인 배열을 생각하자
/*
[2,3,1]
1단계
*/

function bubbleSort(arr) {
  for(let i = 0; i < arr.length-1; i++) { // 0 1 2 3 (4번)
    for(let j = 0; j < arr.length - 1 - i ; j++) { // 0 ~ 4번
      console.log('i번째반복',i, '인덱스',j);
      console.log('인접원소', arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      console.log(arr);
    }
  }
  // console.log(arr);
}
// bubbleSort(arr)

// 이해하기 쉬움 이게 제일??
function bubbleSort2(arr) {
  for(let i = 1; i <= arr.length - 1; i++) { //단계에 기준으로 설정 ex) 길이 5인 배열 > 1 2 3 4 단계
    for(let j = 0; j <= arr.length - 1 - i; j++) { //인덱스를 기준 ex) 1단계 인덱스 0~3 2단계 인덱스 0~2
      console.log(`${i}단계, 인덱스 ${j}, ${j+1}`);
      // console.log('인접원소', arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      console.log(arr);
    }
  }
}
bubbleSort2(arr)