import REGEX_OBJECT from './regexp.js';

const MESSAGE = Object.freeze({
  PURCHASING_MESSAGE: '구입 금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요\n',
  WINNING_STATISICS: '당첨 통계\n---',
  BLANK: '',
  COMMA: ',',
});

const MESSAGE_MATCHING = Object.freeze({
  makeThreeMatchingFn: (number = 0) => `3개 일치 (5,000원) - ${number}개`,
  makeFourMatchingFn: (number = 0) => `4개 일치 (50,000원) - ${number}개`,
  makeFiveMatchingFn: (number = 0) => `5개 일치 (1,500,000원) - ${number}개`,
  makeFiveAndBonusMatchingFn: (number = 0) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  makeSixMatchingFn: (number = 0) => `6개 일치 (2,000,000,000원) - ${number}개`,
});

const makeNumberOfLottoMessageFn = (number = 0) => `${number}개를 구매했습니다.`;

const makeRateOfReturnMessageFn = (number = 0) => {
  const numberString = String(number.toFixed(1)).replace(REGEX_OBJECT.NUMERIC_COMMA_EXPRESSION, MESSAGE.COMMA);
  return `총 수익률은 ${numberString}%입니다.`;
};

const MESSAGE_OBJECT = Object.freeze({
  MESSAGE,
  MESSAGE_MATCHING,
  makeNumberOfLottoMessageFn,
  makeRateOfReturnMessageFn,
});

export default MESSAGE_OBJECT;
