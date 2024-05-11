const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(numbers) {
	return numbers.reduce((total, current) => total + current, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, current) => total * current, 1)
};

const power = function(x,y) {
	return x ** y
};

const factorial = function(number) {
    if (number === 0) {
      return number = 1;
    }
    else {
      return number * factorial(number - 1)
    }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
