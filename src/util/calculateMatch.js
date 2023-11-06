/**
 * 각 복권 별 당첨 번호, 보너스 번호 일치 개수를 확인합니다.
 * @param {number[]} lottoList
 * @param {number[]} lotto
 * @param {number} bonus
 * @returns
 */
const calculateMatch = (lottoList, lotto, bonus) => {
  let matchCount = 0;
  let bonusMatch = 0;

  if (lottoList.includes(bonus)) bonusMatch += 1;
  for (let i = 0; i < lotto.length; i += 1) {
    if (lottoList.includes(lotto[i])) matchCount += 1;
  }

  return { matchCount, bonusMatch };
};

export default calculateMatch;
