/**
 * 각 로또별 일치 여부를 확인하고 카운트
 * @param {number} matchCount
 * @param {number} bonusCount
 * @param {{ three: number, four: number, five: number, fiveAndBonus: number, six: number }} match
 */
const checkMatch = (matchCount, bonusCount, match) => {
  if (matchCount === 3) match.three += 1;
  if (matchCount === 4) match.four += 1;
  if (matchCount === 5 && bonusCount === 0) match.five += 1;
  if (matchCount === 5 && bonusCount === 1) match.fiveAndBonus += 1;
  if (matchCount === 6) match.six += 1;
};

export default checkMatch;
