import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_MATCHING } from '../constants/message.js';

class OutputView {
  /**
   * 로또 리스트 출력
   * @param {number[][]} lottos
   */
  static printPurchacingLotto(lottos) {
    lottos.forEach((lotto) => {
      const lottoString = `[${lotto.join(', ')}]`;
      Console.print(lottoString);
    });
  }

  /**
   * 일치하는 숫자 여부 확인 메시지 출력
   * @param {{ three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 }} match
   */
  static printMatching(match) {
    const keys = Object.keys(match);
    keys.forEach((key) => {
      Console.print(MESSAGE_MATCHING[key](match[key]));
    });
  }

  /**
   * 문자열을 Console 처리
   * @param {string} message
   */
  static printOutput(message) {
    Console.print(message);
  }
}

export default OutputView;
