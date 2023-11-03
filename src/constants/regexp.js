const NUMERIC_COMMA_EXPRESSION = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;

const REGEX_OBJECT = Object.freeze({ NUMERIC_COMMA_EXPRESSION });

export default REGEX_OBJECT;
