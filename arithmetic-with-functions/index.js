// Identity funcunction
const identity = value => value;

// Number 0 - ignores func
const zero = func => value => value;

// Number 1
const one = func => value => func(value);

// Number 2
const two = func => value => func(func(value));

// Number 3
const three = func => value => func(func(func(value)));

// Successor funcunction
const successor = numeral => func => value => func(numeral(func)(value));

// Plus
const plus = numeral1 => numeral2 => func => value => numeral1(func)(numeral2(func)(value));

// Multiply
const multiply = numeral1 => numeral2 => func => value => numeral1(numeral2(func))(value);

// exponential
const exponential = numeral1 => numeral2 => func => value => (numeral2(numeral1))(func)(value);

// predecessor
const predecessor = numeral => func => value => numeral(g => h => h(g(func)))(u => value)(u => u);

// todo Minus
// const minus = (numeral1) => (numeral2) => func => value => (numeral2(predecessor(numeral1)))(func)(value);

module.exports = {
  zero,
  one,
  two,
  three,
  successor,
  plus,
  multiply,
  exponential,
  predecessor
}
