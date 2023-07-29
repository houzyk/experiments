const {
  zero,
  one,
  two,
  three,
  successor,
  plus,
  multiply,
  exponential,
  predecessor
} = require("./index");

let callBackCalls = 0; // tracks the number of times callBack runs

const callBack = () => {
  callBackCalls = callBackCalls + 1;
}

describe('Nummeral Encodings', () => {

  beforeEach(() => {
    callBackCalls = 0;
  });

  test('zero <=> 0', () => {
    zero(callBack)();
    expect(callBackCalls).toBe(0);
  });

  test('one <=> 1', () => {
    one(callBack)();
    expect(callBackCalls).toBe(1);
  });

  test('two <=> 2', () => {
    two(callBack)();
    expect(callBackCalls).toBe(2);
  });

  test('three <=> 3', () => {
    three(callBack)();
    expect(callBackCalls).toBe(3);
  });

});

