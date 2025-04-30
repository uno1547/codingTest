// 키패드 누르기
function solution(numbers, hand) {
  const map = {l : "*", r : "#"}
  
  const keypadCords = {
'1': [0, 0], '2': [1, 0], '3': [2, 0],
'4': [0, 1], '5': [1, 1], '6': [2, 1],
'7': [0, 2], '8': [1, 2], '9': [2, 2],
'*': [0, 3], '0': [1, 3], '#': [2, 3]        
  }
  
  const result = numbers.map(number => {
      if(number%3 == 1 && number != 0) { // 1, 4, 7
          map.l = number
          return "L"
      } else if(number%3 == 0 && number != 0)  { // 3, 6, 9
          map.r = number
          return "R"
      } else { // 2, 5, 8, 0
          const lDistance = Math.abs(keypadCords[map.l][0] - keypadCords[number][0]) + Math.abs(keypadCords[map.l][1] - keypadCords[number][1])
          const rDistance = Math.abs(keypadCords[map.r][0] - keypadCords[number][0]) + Math.abs(keypadCords[map.r][1] - keypadCords[number][1])
          if(lDistance < rDistance) { // 이전의 l이 더 가까울때
              map.l = number
              return "L"
          } else if(lDistance > rDistance) { // 이전의 r이 더 가까울때
              map.r = number
              return "R"
          } else { // 이전의 l, 이전의 r 로부터 같은거리일때
              if(hand == "right") {
                  map.r = number
                  return "R"
              }
              if(hand == "left") {
                  map.l = number
                  return "L"
              }
          }
      }
  }).join("")
  return result
}

solution(	[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")