// Identity Function

let count = 0;

const identity = x => {
  count = count + 1;
  return x;
};

// Number 0 - ignores f
const zero = f => v => v;

// Number 1
const one = f => v => f(v);

// Number 2
const two = f => v => f(f(v));

// Number 3
const three = f => v => f(f(f(v)));
// three(identity)(() => {});

// Successor Function
const successor = (n) => (f) => (v) => f(n(f)(v));
// successor(two)(identity)()

// Plus
const plus = (n1) => (n2) => (f) => (v) => n1(f)(n2(f)(v));
// plus(successor(one))(successor(one))(identity)(() => {});

// Multiply
const multiply = (n1) => (n2) => (f) => (v) => n1(n2(f))(v);
// multiply(one)(three)(identity)();

// exponential
const exponential = (n1) => (n2) => (f) => (v) => (n2(n1))(f)(v);
// exponential(three)(two)(identity)();

// predecessor
// const predecessor = (n) => (f) => (v) => n(g => h => h(g(f)))(u => v)(u => u);
// predecessor(two)(identity)();

// ? Minus
// ! const minus = (n1) => (n2) => (n2(predecessor))(n1);

// minus(three)(one)(identity)

console.log("Result", count);
