// 연속 부분 수열 합의 개수
const solution = (elements) => {
  // 길이가 5인 0 1 2 3 4 index인 값들이 있을때
  // 1개 0,1,2,3,4 5가지경우
  // 2개 01,12,23,34,40, 5가지경우
  // 3개 012, 123, 234, 340, 401 5가지
  // 4개 0123, 1234, 2340, 3401, 4012 5가지
  // 5개 01234, 5가지인데 합은 모두같으니 그냥 모든수 더한걸로 퉁치기

  
  const set = new Set()
  for(let i = 1; i <= elements.length; i++) {
    // i = 1, 2, 3, 4, 5 길이
    console.log(`길이 ${i}`);
    for(let j = 0; j < elements.length; j++) {
      // j = 0, 1, 2, 3, 4 시작 index
      let tmp = []
      for(let k = j; k < j + i; k++) {
        tmp.push(elements[k % elements.length])
      }
      console.log(tmp);
      const sum = tmp.reduce((acc, val) => {
        return acc + val
      }, 0)
      set.add(sum)
    }
  }
  // console.log(set);
  // console.log(Array.from(set).sort((a, b) => a - b));
  return set.size
}

const solution2 = (elements) => {
  const n = elements.length;
  const arr = elements.concat(elements); // 원형 처리 위해 2배로 확장
  const set = new Set();

  for (let len = 1; len <= n; len++) {
    // len = 1, 2, 3, 4, 5
    console.log(`len은 ${len}이에요`);
    let sum = 0;
    // 초기 윈도우 합
    for (let i = 0; i < len; i++) sum += arr[i];
    // 0 01 012 0123 01234
    set.add(sum);
    console.log('초기결과 set', set);
    // 윈도우 이동
    for (let start = 1; start < n; start++) {
      console.log(`윈도우 start ${start}`);
      sum = sum - arr[start - 1] + arr[start + len - 1];
      console.log(`윈도우 합 ${sum}`);
      set.add(sum);
      console.log(set);
    }
    console.log('윈도우결과 set', set);
  }

  return set.size;
};


solution2([7, 9, 1, 1, 4])