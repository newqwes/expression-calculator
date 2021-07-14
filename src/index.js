function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  console.log(expr);

const left = expr.match(/[(]/g);
const right = expr.match(/[)]/g);

const devZero = expr.match(/\/ 0/g);

if(devZero) throw 'TypeError: Division by zero.';

if(left && right && left.length !== right.length) {
  throw 'ExpressionError: Brackets must be paired';
}

if(!left && right) {
  throw 'ExpressionError: Brackets must be paired';
}
if(left && !right) {
  throw 'ExpressionError: Brackets must be paired';
}


  const a = new Function(`return ${expr}`);

  const result = a();

  if(result === Infinity) throw "TypeError: Division by zero.";

  console.log(a());

  return result;
}

module.exports = {
    expressionCalculator
}