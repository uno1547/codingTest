function solution(coin, cards) {
  const target = cards.length + 1;
  let hand = cards.splice(0, cards.length / 3); // 손패
  let keep = []; // 뽑은 카드 저장소
  let round = 0;

  console.log(`초기 상태 → hand: [${hand}], coin: ${coin}, target: ${target}`);
  console.log("--------------------------------------------------");

  // 남은 카드가 없을 때까지 진행
  while (cards.length) {
    round++;
    const picked = cards.splice(0, 2);
    keep.push(...picked);

    console.log(`라운드 ${round} 시작`);
    console.log(`  새로 뽑은 카드: [${picked}]`);
    console.log(`  현재 hand: [${hand}], keep: [${keep}], coin: ${coin}`);

    // 1️⃣ 손패로만 target 만들기
    const handPair = getPair(hand, target);
    if (handPair) {
      hand = hand.filter((e) => !handPair.includes(e));
      console.log(`  손패 조합으로 ${handPair} → 성공 (코인 사용 X)`);
      console.log(`  남은 hand: [${hand}], keep: [${keep}], coin: ${coin}\n`);
      continue;
    }

    // 2️⃣ hand + keep 조합으로 target 만들기 (코인 1개 사용)
    const handKeepPair = getHandKeepPair(hand, keep, target);
    if (handKeepPair && coin) {
      const [handNum, keepNum] = handKeepPair;
      hand = hand.filter((e) => e !== handNum);
      keep = keep.filter((e) => e !== keepNum);
      coin--;
      console.log(`  hand+keep 조합으로 ${handKeepPair} → 성공 (코인 1 사용)`);
      console.log(`  남은 hand: [${hand}], keep: [${keep}], coin: ${coin}\n`);
      continue;
    }

    // 3️⃣ keep 두 장으로 target 만들기 (코인 2개 사용)
    const keepPair = getPair(keep, target);
    if (keepPair && coin >= 2) {
      keep = keep.filter((e) => !keepPair.includes(e));
      coin -= 2;
      console.log(`  keep 조합으로 ${keepPair} → 성공 (코인 2 사용)`);
      console.log(`  남은 hand: [${hand}], keep: [${keep}], coin: ${coin}\n`);
      continue;
    }

    // 실패 시 종료
    console.log(`  ${target}을(를) 만들 수 없음 → 게임 종료`);
    console.log(`  마지막 상태: hand: [${hand}], keep: [${keep}], coin: ${coin}\n`);
    break;
  }

  console.log("--------------------------------------------------");
  console.log(`최종 결과: ${round}라운드 통과 (반환값 = ${round + 1})`);
  return round + 1;
}

// arr에서 2장을 골라 target을 만들 수 있는지 확인
function getPair(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [arr[i], arr[j]];
    }
  }
  return null;
}

// hand에서 1장, keep에서 1장으로 target 만들기 확인
function getHandKeepPair(hand, keep, target) {
  for (let i = 0; i < hand.length; i++) {
    for (let j = 0; j < keep.length; j++) {
      if (hand[i] + keep[j] === target) return [hand[i], keep[j]];
    }
  }
  return null;
}

// 테스트 예시
solution(4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]);
