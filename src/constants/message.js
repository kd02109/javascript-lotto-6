const MESSAGE = Object.freeze({
  PURCHASING_MESSAGE: '구입 금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요\n',
  WINNING_STATISICS: '당첨 통계\n---',
  BLANK: '',
});

const MESSAGE_MATCHING = Object.freeze({
  makeThreeMatchingFn: (number = 0) => `3개 일치 (5,000원) - ${number}개`,
  makeFourMatchingFn: (number = 0) => `4개 일치 (50,000원) - ${number}개`,
  makeFiveMatchingFn: (number = 0) => `5개 일치 (1,500,000원) - ${number}개`,
  makeFiveAndBonusMatchingFn: (number = 0) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  makeSixMatchingFn: (number = 0) => `6개 일치 (2,000,000,000원) - ${number}개`,
});

const makeNumberOfLottoMessageFn = (number = 0) => {
  return `${number}개를 구매했습니다.`;
};

const makeLottoListMessageFn = (lottos = []) => {
  let lottosString = '';
  lottos.forEach((item) => {
    lottosString += `${JSON.stringify(item)}\n`;
  });
  return lottosString;
};

const makeRateOfReturnMessageFn = (number = 0) => `총 수익률은 ${number}%입니다.`;

const MESSAGE_OBJECT = Object.freeze({
  MESSAGE,
  MESSAGE_MATCHING,
  makeNumberOfLottoMessageFn,
  makeLottoListMessageFn,
  makeRateOfReturnMessageFn,
});

export default MESSAGE_OBJECT;
