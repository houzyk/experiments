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

describe('Successor Operator', () => {

  beforeEach(() => {
    callBackCalls = 0;
  });

  test('Successor of zero <=> 1', () => {
    successor(zero)(callBack)();
    expect(callBackCalls).toBe(1);
  });

  test('Successor of one <=> 2', () => {
    successor(one)(callBack)();
    expect(callBackCalls).toBe(2);
  });

  test('Successor of two <=> 3', () => {
    successor(two)(callBack)();
    expect(callBackCalls).toBe(3);
  });

  test('Successor of three <=> 4', () => {
    successor(three)(callBack)();
    expect(callBackCalls).toBe(4);
  });

  test('Successor of sucessor of zero <=> 2', () => {
    successor(successor(zero))(callBack)();
    expect(callBackCalls).toBe(2);
  });

  test('Successor of sucessor of three <=> 5', () => {
    successor(successor(three))(callBack)();
    expect(callBackCalls).toBe(5);
  });

  test('Successor of sucessor of successor of zero <=> 3', () => {
    successor(successor(successor(zero)))(callBack)();
    expect(callBackCalls).toBe(3);
  });

});

describe('Plus Operator', () => {

  beforeEach(() => {
    callBackCalls = 0;
  });

  test('zero plus zero <=> 0', () => {
    plus(zero)(zero)(callBack)();
    expect(callBackCalls).toBe(0);
  });

  test('one plus two <=> 3', () => {
    plus(one)(two)(callBack)();
    expect(callBackCalls).toBe(3);
  });

  test('two plus one <=> 3', () => {
    plus(two)(one)(callBack)();
    expect(callBackCalls).toBe(3);
  });

  test('one plus successor of three <=> 5', () => {
    plus(one)(successor(three))(callBack)();
    expect(callBackCalls).toBe(5);
  });

  test('zero plus Successor of sucessor of zero <=> 2', () => {
    plus(zero)(successor(successor(zero)))(callBack)();
    expect(callBackCalls).toBe(2);
  });

});
