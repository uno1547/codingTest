// lv1 체육복
/*
lost 돌면서 lost의 인접인 학생이 reserve에 있으면 pass
lost의 인접인 학생이 없다면 -1
[2, 4] > [1, 3, 5]
수업못듣는학생을 제외시키기
[2, 4] > [3]
[3] > [1]
3인접인 2,4가 없으니 -1 

두벌인 친구가 잃어버린경우
[3] > [2] 2번이 빌려주면 3명다 수업들음

[2, 3] > [2] 2번이 못빌려줌 2명(1, 2)만 수업들음

[2, 3] > [1, 2]
2번은 못빌려줌 > 2명(1, 2)만 수업듣는건지 아니면
1번이 2번을 통해 3번한테 빌려준다면 3명도들을수있나?

[2, 3] > [1, 2, 4]
4명다들음

1. 빌려줄수있는여부체크
lost한명씩 살펴보면서 
reserve에 자기자신이 있으면 reserve에서 제거

2. 빌리는여부체크
lost한명씩 살펴보면서
reserve에 인접인 번호 있다면 해당번호 reserve에서 제거
인접인 번호 없다면 -1 
*/
function solution(n, lost, reserve) {
  let cnt = n
  // const newReserved = reserve.filter(num => !lost.includes(num))
  // console.log(newReserved);
  const newLost = lost.filter(el => !reserve.includes(el))
  const newReserved = reserve.filter(el => !lost.includes(el))

  newLost.forEach(num => {
    const [prev, next] = [num - 1, num + 1]
    console.log('인접 index',newReserved.indexOf(prev), newReserved.indexOf(next));
    if(newReserved.includes(prev) || newReserved.includes(next)) { //빌릴수있을경우 빌림 처리
      let index = newReserved.indexOf(prev) == -1 ? newReserved.indexOf(next) : newReserved.indexOf(prev)
      /*
      prev next 
      0 1 > prev idx
      1 2 > prev idx
      -1 0 > next idx
      0 -1 > prev idx 
      -1 -1 은 애초에 못나옴
      */
      newReserved.splice(index, 1)
      // let index = newReserved.indexOf(prev) == -1 ? newReserved.indexOf(next) : newReserved.indexOf(prev) 잘못된로직

      // if (newReserved.indexOf(prev) != -1 && newReserved.indexOf(next) != -1) { // 인접이 둘개 존재시 둘중 앞선 Index 그리디라 상관없음
      //   index = Math.min(newReserved.indexOf(prev), newReserved.indexOf(next))
      // } else { // 둘중하나는 없을경우

      // }
      // if(newReserved.indexOf(prev) == -1 && newReserved.indexOf(next) == -1) // 인접원소 둘다 여분없을경우 못빌려줌 이경우는 없네? 생각해보니 둘중 하나라도 포함 되있으니
      console.log('빌려주고난 여유분', newReserved);
    } else { // 빌릴수없을경우 수업못들음
      console.log('못빌림');
      cnt -= 1
    }
  });
  console.log(cnt);
}

// solution(5, [2, 4], [1, 3, 5])
// [2], [1, 4] > [4]
// [2], [1, 3] > [3]
// [2], [3, 4] > []
// solution(5, [1, 3], [1, 3, 5]) // [1,2,3,4,5] 문제 케이스
// solution(5, [2, 4], [3])
// solution(5, [2, 4], [2, 4]) //문제케이스
// 순회하면서 lost, reserve가 같이 수정되어야함 
// solution(3, [3], [1])

// 반례 케이스
// 오름차순 정렬이 안되어있을경우 문제발생
// 입력값 〉 5, [4, 2], [3, 5]
// 기댓값 〉 5
function solution2 (n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    console.log(students);
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);
    console.log(students);
    console.log(students);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){ // 왼쪽에 나눠줌
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){ // 오른쪽에 나눠줌
                students[i+1]++;
                students[i]--;
        }
    }

    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}
solution2(5, [2, 4], [1, 3, 5])
// solution2(5, [1, 3], [1, 3, 5])
// solution2(5, [2, 4], [3])
// solution2(5, [2, 4], [2, 4])
// solution2(3, [3], [1])