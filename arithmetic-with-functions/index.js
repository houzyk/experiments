// Utilities
let amount = 0;
const tracker = () => {
  amount = amount + 1;
}

// Identity funcunction
const Identity = value => value;

// Number 0 - ignores func
const zero = func => value => value;
// zero(tracker)();

// Number 1
const one = func => value => func(value);
// one(tracker)();

// Number 2
const two = func => value => func(func(value));
// two(tracker)();

// Number 3
const three = func => value => func(func(func(value)));
// three(tracker)();

// Successor funcunction
const successor = numeral => func => value => func(numeral(func)(value));
// successor(two)(tracker)()

// Plus
const plus = numeral1 => numeral2 => func => value => numeral1(func)(numeral2(func)(value));
// plus(successor(one))(successor(one))(tracker)(() => {});

// Multiply
const multiply = numeral1 => numeral2 => func => value => numeral1(numeral2(func))(value);
// multiply(one)(three)(tracker)();

// exponential
const exponential = numeral1 => numeral2 => func => value => (numeral2(numeral1))(func)(value);
// exponential(three)(two)(tracker)();

// predecessor
const predecessor = numeral => func => value => numeral(g => h => h(g(func)))(u => value)(u => u);
// predecessor(three)(tracker)();

// ? Minus
// todo const minus = (numeral1) => (numeral2) => func => value => (numeral2(predecessor(numeral1)))(func)(value);
// minus(one)(two)(tracker)();

// console.log("Result", amount);
