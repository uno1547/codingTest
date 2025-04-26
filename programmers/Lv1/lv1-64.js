const par = ["leo", "kiki", "eden"]
const com =	["eden", "kiki"]

const map = {
  leo : 0
}
// console.log(map["leo"])
// console.log(map["kiki"])

function solution(participant, completion) {
  const map = {}
  completion.forEach((member, idx) => {
      map[member] = idx + 1
  })
  console.log(map);
  const idx = participant.map((member) => {
    return map[member] ? map[member] : member
  })

  // const fail = participant.find(par)

  console.log(idx);
  
}

function solution2(participant, completion) {
  var answer = '';
  const participantHash = new Map();
  const completionHash = new Map();

  participant.forEach(value => {
      if (participantHash.has(value)) {
          participantHash.set(`${value}`, participantHash.get(`${value}`) + 1);
      } else {
          participantHash.set(`${value}`, 1);
      }
  });
  console.log(participantHash);

   completion.forEach(value => {
      participantHash.set(`${value}`, participantHash.get(`${value}`) - 1);
      if (participantHash.get(`${value}`) === 0) {
          participantHash.delete(`${value}`);
      }
  })

  console.log(participantHash);
  console.log(...participantHash);
  answer = [...participantHash][0][0];
  console.log(answer);
  return answer

  // arr1 = [a, m, m, s]
  // arr2 = [a, m, s]

  // completion.forEach(value => {
  //     if (completionHash.has(value)) {
  //         completionHash.set(`${value}`, completionHash.get(`${value}`) + 1);
  //     } else {
  //         completionHash.set(`${value}`, 1);
  //     }
  // });


  // console.log(participantHash);
  // console.log(completionHash);

  // console.log(mySet.size);  3
  // mySet.delete(2);  값을 삭제
}


function solution3(participant, completion) {
  var answer = '';

  completion[completion.length] = '';

  var arr1 = participant.sort();
  var arr2 = completion.sort();

  for(let i=0; i<arr1.length; i++){

      if(arr1[i] !== arr2[i]){

           answer = arr1[i];

      }

  }

  return answer;
}
console.log(solution2(["leo", "kiki", "eden"], ["eden", "kiki"])) // leo
console.log(solution2(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])) // vinko
console.log(solution2(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])) // mislav
