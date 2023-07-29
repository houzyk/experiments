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


