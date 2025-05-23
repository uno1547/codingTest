// 개인정보 수집 유효기간
const solution = (today, terms, privacies) => {
  const todayEl = today.split('.').map(Number)
  const termTable = {}

  terms.forEach((val) => {
    const [policy, dates] = val.split(" ")
    termTable[policy] = dates
  })

  // solution("2009.12.28", ["A 13"], ["2008.11.03 A"])
  const expires = privacies.map((val, idx) => {
    const [start, policy] = val.split(' ')
    // start "2021.05.02" policy "A"
    /*
      start 시점부터 policy유효기간을 더한 만기일을 계산하고 반환
    */
    const startEl = start.split('.').map(Number)
    const startDate = startEl[0] * 12 * 28 + startEl[1] * 28 + startEl[2]
    const dur = termTable[policy] * 28
    const endDate = startDate + dur
    // console.log('기간 이후의 날을 날짜로 환산', endDate);
    
    let year = Math.floor(endDate / (12 * 28))
    const remain = endDate % (12 * 28)
    let month = Math.floor(remain / 28)
    let date = remain % 28
    console.log(year, month, date);
    if(date == 0) {
      // 일수가 0이면 month - 1, day = 28
      // 일수가 0한결과가 month 0을 만드는경우 > year - 1, month = 12, day = 28
      month -= 1
      date = 28
      if(month == 0) {
        year -=1
        month = 12
      }
    } else if (month == 0) {
      month = 1
    }

    return [year, month, date]
  })

  console.log(expires);
  const ans = []
  
  expires.forEach((val, idx) => {
    // todayEl = [2022, 5, 19]
    // console.log(todayEl, "비교");
    for(let i = 0; i < 3; i++) {
      if(todayEl[i] > val[i]) { // 오늘 > 만료일 파기해야함
        // console.log('파기!');
        ans.push(idx+1)
        return
      }
      if(todayEl[i] < val[i]) { // 오늘 < 만료일 파기할필요없음, 다음 날짜 탐색
        // console.log('안전!');
        return
      }
      // console.log('따져볼게');
    }
  })
  console.log(ans)
  return ans
}

// solution("2022.05.19",	["A 6", "B 12", "C 3"],	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])
// solution("2009.12.28", ["A 13"], ["2008.11.03 A"]) 낙방1
// solution("2022.02.28", ["A 23"], ["2020.01.28 A"]) 익명1
solution("2020.12.28",	["B 1"],	["2020.11.28 B"])
// solution("2019.01.01", ["B 12"], ["2017.12.21 B"]) //익명1
// solution("2019.01.01", ["B 12"], ["2017.11.21 B"]) //익명1
// solution("2019.01.01", ["B 12"], ["2017.10.21 B"]) //익명1
// solution("2019.12.09", ["A 12"], ["2018.12.10 A", "2010.10.10 A"])


// solution("2022.05.19",	["A 6", "B 12", "C 3"],	["2021.05.02 A", "2021.07.01 B", "2021.08.10 C", "2022.02.20 C"])

// 날짜 비교하는 로직
/*
function isAfter([y1, m1, d1], [y2, m2, d2]) {
  if (y1 > y2) return true;
  if (y1 < y2) return false;
  if (m1 > m2) return true;
  if (m1 < m2) return false;
  return d1 > d2;
}

function isAfter(date1, date2) {
  for (let i = 0; i < 3; i++) { //holy
    if (date1[i] > date2[i]) return true;
    if (date1[i] < date2[i]) return false;
  }
  return false;
}
*/