import LottoValidation from '../src/validation/LottoValidation.js';
import ValidationError from '../src/error/ValidationError.js';
import { SELECT_NUMBER_ERROR } from '../src/constants/error.js';

describe('입력된 당첨번호의 예외 발생이 정확하게 이루어지는지 확인합니다.', () => {
  // given
  test.each([[[1, 2, 3, 4]], [[1, 2, 3, 4, 5, 6, 7]]])('배열의 길이가 6인지 확인', (input) => {
    // when, then
    const error = new ValidationError(SELECT_NUMBER_ERROR.COUNT);
    expect(() => LottoValidation.checkLength(input)).toThrow(error.message);
  });

  // given
  test.each([[[1, 200, 30, 0]], [[45, 2356, 312, 45, 51, 62, 7]]])('숫자가 1~45 사이의 값인지 확인', (input) => {
    // when, then
    const error = new ValidationError(SELECT_NUMBER_ERROR.NUMBER);

    expect(() => LottoValidation.checkNumber(input)).toThrow(error.message);
  });

  // given
  test.each([[[1, 1, 2]], [[5, 6, 5, 5]]])('중복 숫자 확인', (input) => {
    // when, then
    const error = new ValidationError(SELECT_NUMBER_ERROR.DUPLICATE);

    expect(() => LottoValidation.checkDuplicate(input)).toThrow(error.message);
  });
});