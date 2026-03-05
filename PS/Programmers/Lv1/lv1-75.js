// 유연근무제
/*
1. schedules > 데드라인시간으로 변환 +10분해서(55분같은 끝자락 값 처리)
2. timelogs순회, result값, result+1의 값은 pass 해도됌
3. 
*/

const solution = (schedules, timelogs, startday) => {
  const deadLines = schedules.map(pref => {
    
    let hour = Math.floor((pref + 10) / 100)
    let minute = (pref + 10) % 100
    console.log(hour, minute);
    if(minute >= 60) {
      hour += Math.floor(minute / 60)
      minute = (minute % 60)
    }
    console.log(hour * 100 + minute);
    return hour * 100 + minute
  })
  console.log(deadLines);

  const sat = (6 - startday + 7) % 7
  const sun =  (sat + 1) % 7
  console.log(sat, sun);
  let cnt = 0
  for(let i = 0; i < timelogs.length; i++) {
    // i번째 사람
    const deadLine = deadLines[i]
    let success = true

    for(let j = 0; j < timelogs[i].length; j++) {
      // 모든 요소가 만족할때는 true, 한개라도 불만족할때 false를하려면
      // success가 true였다가 불만족 조건일때 false로 바꾸는건가
      // success가 false였다가 만족일때 true로 바꾸는건 처리할수가없음 불만족해서 break된거나, 모두만족이라 for문을 온전히 마친거나 둘다 루프바깥으로 빠지기때문에?
      // 주말은 pass
      if(j == sat || j == sun) continue
      // 지각하면 실패
      if(deadLine < timelogs[i][j]) {
        success = false
        break  
      }
    }
    console.log(`${i} 번째 사람 ${success}`);
    if(success) cnt+=1
  }
    // var answer = 0;
    // return answer;
  console.log(cnt);
}

// solution([700, 800, 1100], [[710, 2359, 1050, 700, 650, 631, 659], [800, 801, 805, 800, 759, 810, 809], [1105, 1001, 1002, 600, 1059, 1001, 1100]], 5)
solution([730, 855, 700, 720],	[[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]], 1)
const test = (input) => {
    const a = (6 - input + 7) % 7;
    const b = (a + 1) % 7;
    console.log( [a, b])
}