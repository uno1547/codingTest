/*
1. 이모티콘 플러스 서비스 가입자를 최대한 늘리기
2. 이모티콘 판매액을 최대한 늘리기

플러스 서비스 가입자를 늘릴려면 결국, 할인율 조정을 통한 이모티콘 구매를 늘려 구매비용을 증가시켜서,
개개인 기준을 넘도록해 플러스 서비스 가입을 유도해야함
하지만, 플러스 서비스를 가입할경우 구매취소후 서비스로 넘어가기때문에 서비스 가입은 최대로 하되, 
판매액 또한 최대가 되어야함

결국 판매량의 증가는 이모티콘 플러스 서비스 가입자 증가로 이어지기 때문에
이모티콘 판매량을 최대한 늘리는것이 관건

하지만 여기서 중요한 점은 할인율을 높여야 구매 가능성 높아짐, 할인율이 높아질수록 판매액은 줄어든다는 점
근데 판매액은 일단 사야 따질수있으므로, 할인율을 최대로 세팅후에 조정해나가면서, 판매액이 최대가 되는 지점을 찾아야함

한이모티콘에 대해서 할인율을 모두가 구매하는 수치로 세팅(제일 높은 할인율 = 구매비용은 최소가 될것)
ex) 기준이 제일 높은 사용자의 40%할인율 로 모두가 구매하는 수치로 세팅

1번이모티콘에 대해 40%할인율로 세팅 > 40퍼할인율에 대한 각 사람의 구매비용 계산 > ex 5000원
2번이모티콘에 대해 40%할인율로 세팅 > 40퍼할인율에 대한 각 사람의 구매비용 계산 > ex 6000원

모든 이모티콘에 대해 40퍼 할인율 > 18000원 구매비용 발생
여기서 특정 이모티콘에 대해 할인율을 낮추면 무조건 구매비용이 는다고 볼수있나? 구매를 안하게 될수도있는데?
그냥 해보자 
*/

function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40];

  const getResult = (discount, price) => {
    // console.log(`할인율: ${discount}, 가격: ${price}`);
    // 할인율에 대해 전체 구매비용 및 플러스 서비스 가입자 수 계산
    let plusServiceCount = 0;
    let totalSales = 0;

    const result = users.reduce((acc, val) => {
      const [minDiscount, maxCost] = val;
      // console.log(`사용자 기준: ${minDiscount}%, ${maxCost}원`);
      if(discount < minDiscount) return acc;

      // 구매비용 계산
      const cost = price * (100 - discount) / 100; // 할인 적용가
      // console.log(`할인적용가: ${cost}`);
      // 기준 이상시 플러스 서비스 가입
      if(cost >= maxCost) return {plusServiceCount: acc.plusServiceCount + 1, totalSales: acc.totalSales}; // 기준 초과시 플러스 서비스 가입
      // 기준 미만시 구매 비용 누적
      return {plusServiceCount: acc.plusServiceCount, totalSales: acc.totalSales + cost};
    }, { plusServiceCount, totalSales });
    return result
  }

  for(let i = 0; i < emoticons.length; i++) {
    console.log(`${i+1}번 이모티콘!`);
    const tmpResult = discounts.map(discount => getResult(discount, emoticons[i]));
    console.log(`${i+1}번 이모티콘의 각 할인율에 대한 결과:`, tmpResult);
  }
}

solution([[40, 10000], [25, 10000]], [7000, 9000])

/*
내가 푼건 이모티콘 1개에 대한 4가지 할인율에 따른 결과 따져본거고 문제에서 요구하는건 
이모티콘 m개 전체의 할인율 조합을 따져봐야함

부분 최적(그리디) 와 전체 최적(완전탐색) 의 차이 

*/

function bruteForce(users, emoticons) {
  const discounts = [10, 20, 30, 40];
  let maxPlus = 0;
  let maxSales = 0;

  const dfs = (idx, discountSet) => {
    // 모든 이모티콘에 대한 할인율을 정한 경우
    if (idx === emoticons.length) {
      let plusCnt = 0;
      let totalSales = 0;

      // 각 사용자에 대해 계산
      for (const [minDiscount, limit] of users) {
        let spend = 0;
        for (let i = 0; i < emoticons.length; i++) {
          if (discountSet[i] >= minDiscount) {
            spend += emoticons[i] * (100 - discountSet[i]) / 100;
          }
        }

        // 플러스 가입 여부
        if (spend >= limit) plusCnt++;
        else totalSales += spend;
      }

      // 최대값 갱신
      if (plusCnt > maxPlus) {
        maxPlus = plusCnt;
        maxSales = totalSales;
      } else if (plusCnt === maxPlus && totalSales > maxSales) {
        maxSales = totalSales;
      }
      return;
    }

    // 현재 이모티콘에 대해 4가지 할인율 적용
    for (const d of discounts) {
      dfs(idx + 1, [...discountSet, d]);
    }
  };

  dfs(0, []);

  return [maxPlus, Math.floor(maxSales)];
}

bruteForce([[40, 10000], [25, 10000]], [7000, 9000])

/*
dfs(0, [])
> dfs(1, [10])
>> dfs(2, [10, 10])
>> dfs(2, [10, 20])
>> dfs(2, [10, 30])
>> dfs(2, [10, 40])
> dfs(1, [20])
>> dfs(2, [20, 10])
>> dfs(2, [20, 20])
>> dfs(2, [20, 30])
>> dfs(2, [20, 40])
> dfs(1, [30])
>> dfs(2, [30, 10])
>> dfs(2, [30, 20])
>> dfs(2, [30, 30])
>> dfs(2, [30, 40])
> dfs(1, [40])
>> dfs(2, [40, 10])
>> dfs(2, [40, 20])
>> dfs(2, [40, 30])
>> dfs(2, [40, 40])

이런식으로 모든 이모티콘에 대한 할인율 조합을 다 따져보게됨


*/