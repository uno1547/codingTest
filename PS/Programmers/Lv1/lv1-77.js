function solution(id_list, report, k) {
  // ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
  const map = report.reduce((acc, val) => {
      const [from, to] = val.split(" ")
      if(!acc[to]) acc[to] = {} // 신고당한애 필드 없었다면 추가
      acc[to][from] = acc[to][from] ? 0 : 1 // 누가 신고했는지, 신고자가 없었다면 { 신고자 : 0 } 있었다면 { 신고자 : x++ } 이건 굳이 필요없을지도? 동일한사람이 여러번한거 차피 1로 처리됌 > : 1 일 필요도 없고, true여도 상관없을듯
      return acc
  }, {})
  /*
    map = {
      frodo : {muzi : 1, apeach : 1}, 
      neo : {frodo : 1, muzi : 1}, 
      muzi : {apeach : 1}
    }
  */
  const arr = Object.entries(map)
  /*
    arr = [
      ["frodo", {muzi : 1, apeach : 1}], 
      ["neo" : {frodo : 1, muzi : 1}], 
      ["muzi" : {apeach : 1}]  
    ]
  */
  const banned = arr.filter(([name, table]) => Object.keys(table).length >= k)
  // banned = [ ["frodo", {muzi : 1, apeach : 1}], ["neo" : {frodo : 1, muzi : 1}] ]
  const result = banned.reduce((acc, [_, obj]) => {
      for(let name in obj) {
          if(!acc[name]) acc[name] = 0
          acc[name] += 1
      }
      return acc
  }, {})
  // result = {muzi : 2, apeach : 1, frodo : 1}
  return id_list.map(id => result[id] ? result[id] : 0)
}

// 다른사람 푸리
function solution2(id_list, report, k) {
  // ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2
    let reports = [...new Set(report)].map(a=>{return a.split(' ')}); // 문자열에서부터 set써도 무방하네
    console.log(reports);
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1) // 와 단축평가 ㄷㄷㄷ
    }
    console.log(counts);
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    console.log(good);
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
console.log(solution2(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2));
// console.log(2 + 1 || 1);
// console.log(new Set([1, 1, 2, 3, 4, 5]));
// console.log(new Set(["무지 프로도", "무지 프로도", "무지 어피치"]));
// console.log(...new Set(["무지 프로도", "무지 프로도", "무지 어피치"]));
// console.log();

