function isAutological (func: Function, ...funcParams) {
  const funcReturn = func(...funcParams);
  const isFuncAutological = Object.is(funcReturn, func);

  console.log({
    func,
    funcReturn
  });

  return isFuncAutological;
}

function isNotAutological (func: Function, ...funcParams) {
  return !isAutological(func, ...funcParams);
}

function autologicalFunction () {
  return arguments.callee;
}

function autologicalFunction_ () {
  return autologicalFunction_;
}

function nonAutologicalFunction() {
  return;
}

try {
  isAutological(autologicalFunction); // true
  isAutological(autologicalFunction_); // true
  isAutological(nonAutologicalFunction); // false

  isNotAutological(autologicalFunction); // false
  isNotAutological(autologicalFunction_); // false
  isNotAutological(nonAutologicalFunction); // true

  isAutological(isAutological); // throws error
  isAutological(isAutological, isAutological, isAutological); // throws error

  isAutological(isNotAutological); // throws error
  isAutological(isNotAutological, isNotAutological, isNotAutological); // throws error
} catch (error) {
  console.error(error);
}
