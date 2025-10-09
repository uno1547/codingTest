/*
cap	n	deliveries	pickups	result
4	5	[1, 0, 3, 1, 2]	[0, 3, 0, 4, 0]	16
2	7	[1, 0, 2, 0, 1, 0, 2]	[0, 2, 0, 1, 0, 2, 0]	30
*/
function solution(cap, n, deliveries, pickups) {
  let dist = 0
  while (true) {
    let maxDeliverIdx = deliveries.findLastIndex((v) => v > 0);
    console.log(`maxDeliverIdx: ${maxDeliverIdx}`);
    let maxPickupIdx = pickups.findLastIndex((v) => v > 0);
    console.log(`maxPickupIdx: ${maxPickupIdx}`);
    if (maxDeliverIdx === -1 && maxPickupIdx === -1) break; // 둘다 0이면 종료

    let maxIdx = Math.max(maxDeliverIdx, maxPickupIdx);
    dist += (maxIdx + 1) * 2; // 왕복거리 추가
    console.log(`maxIdx: ${maxIdx}, dist: ${dist}`);
    // 1. 가장 먼곳까지 이동하며 배달
    let deliverCnt = cap
    console.log('배달시작');
    for(let i = maxIdx; i >= 0; i--) {
      // 만약 최대 배달거리의 배달요구량이 5고, cap 이 3이면 가는게 이득인가? 어찌됐던 무조건 다 배달해줘야하니깐 가는게 맞지않나
      // 만약 남은 배달요구량이 1밖에 안되는데, cap이 3이면 다채워야하나? 
      if(deliveries[i] == 0) continue

      if(deliveries[i] >= deliverCnt) { // 배달요구량 : 5, cap : 3
        deliveries[i] -= deliverCnt;
        console.log(`배달완료: ${deliverCnt}개`);
        break; // 배달 다했으면 종료
      }

      // 배달요구량이 cap보다 작으면(cap초과한 경우도 포함)
      deliverCnt -= deliveries[i]; // 남은 배달량
      deliveries[i] = 0; // 다 배달했으니 0
      console.log(`배달완료: ${deliverCnt}개`);
    }

    // 2. 가장 먼곳에서 돌아오며 수거
    let pickupCnt = cap
    for(let i = maxIdx; i >= 0; i--) {
      if(pickups[i] == 0) continue

      if(pickups[i] >= pickupCnt) { // 수거요구량 : 5, cap : 3
        pickups[i] -= pickupCnt;
        console.log(`수거완료: ${pickupCnt}개`);
        break; // 수거 다했으면 종료
      }

      // 수거요구량이 cap보다 작으면(cap초과한 경우도 포함)
      pickupCnt -= pickups[i]; // 남은 수거량
      pickups[i] = 0; // 다 수거했으니 0
      console.log(`수거완료: ${pickupCnt}개`);
    }
    // 3. 1,2 반복
  }
  console.log(`최종 dist: ${dist}`);
  return dist;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]) // 16
// solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]) // 30

/*
5개 케이스에서 시간초과
findLastIndex와 while문의 조합이 최악의 경우 O(n^2)이라 그런듯
index를 직접 관리하거나,
give, take 변수를 만들어서 관리하는 방법도 있다고함
*/