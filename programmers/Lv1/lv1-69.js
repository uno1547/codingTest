// 햄버거 만들기
/* 
  빵 - 야채 - 고기 - 빵
  1 - 2 - 3 - 1

  [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
  [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
  연속적이어야하고, 만들어서 빠진자리를 채우면 연속으로 인정

  1. 
  - indexof(1) 탐색
  - 연속된이후3개가 231 패턴인지 확인
  - 맞으면 잘라냄
  이걸 계속 반복

  힌트
주어진 배열을 문자열로 변환하거나 재정의하지 않는 것이 좋습니다.
ingredient 배열의 길이가 최대 100만까지 주어지기 때문에 시간 초과로 실패하는 경우가 많습니다.
이럴 때는 주어진 배열을 활용해서 pop() 또는 splice() 함수로 배열의 데이터를 삭제하는 것이 좋습니다.

또한 배열의 데이터를 삭제한 후 배열의 index 값을 0으로 초기화해도 시간 초과가 발생 될 것입니다.
이럴 때는 index를 0으로 초기화 하는 것이 아니라 index 값을 감소시키는 것이 좋습니다.



*/
const solution = (ingredient) => {
  let cnt = 0
  while(true) {
    const str = ingredient.join('')  // 1123
    const idx = str.indexOf("1231") // idx or -1
    if(idx == -1) break
    cnt += 1
    ingredient.splice(idx, 4)
  }
  console.log(cnt);
}

const solution1 = ingredient => {
  const stack = []
  let cnt = 0
  for(let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i])
    const len = stack.length

    const [bot, veg, mea, top] = [stack[len - 4], stack[len - 3], stack[len - 2], stack[len - 1]]
    if((len >= 4) && (bot == 1 && veg == 2 && mea == 3 && top == 1)) {
      cnt += 1
      stack.splice(len - 4, 4)
    }
  }
}

const solution2 = ingredient => {
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
      if (ingredient.slice(i, i + 4).join('') === '1231') {
          count++;
          ingredient.splice(i, 4);
          i -= 3;
      }
  }
  console.log(count);  
}

const solution3 = ingredient => {
  let count1 = 0;
  // let checkCount1 = 0;
  
  for (let i = 0; i < ingredient.length; i++) {
      // checkCount1++;
      if (ingredient.slice(i, i + 4).join('') === '1231') {
          count1++;
          ingredient.splice(i, 4);
          i = -1;
      }
  }  
  console.log(`count1 ${count1}`);
  console.log(`실행횟수 ${checkCount1}`);
}

const solution4 = ingredient => {
  let count2 = 0;
  let checkCount2 = 0;
  
  for (let i = 0; i < ingredient.length; i++) {
      checkCount2++;
      if (ingredient.slice(i, i + 4).join('') === '1231') {
          count2++;
          ingredient.splice(i, 4);
          i -= 3;
      }
  }
  // 얘도 3초, 5초, 7초까지 걸림;;; 아마 slice가 원인 일수도, 4줄 자르는 로직이 slice와 index를 통한 접근 두가지가있는데
  // index를 통한 접근이 훨씬 빠른듯 그래서 스택 을 이용한풀이가 빠르게 끝나는것인듯;;
}

const bigIngredient = [];
for (let i = 0; i < 2500; i++) {
  bigIngredient.push(1, 2, 3, 1);
}
console.log(bigIngredient);
// solution3(bigIngredient)
solution4(bigIngredient)
        //   0  1  2  3  4  5
// solution([2, 1, 1, 2, 3, 1, 2, 3, 1]) // 2
// solution([1, 3, 2, 1, 2, 1, 3, 1, 2]) // 0
// solution([1, 2, 3, 1, 2, 1, 2, 3, 1]) // 2

// solution2([1, 2, 3, 1, 2, 3, 1, 1]) // 2