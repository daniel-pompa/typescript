//* Interfaces
// An interface defines the structure of an object, specifying the properties and their types.
// It is used to enforce type-checking and ensure that objects adhere to a particular structure.

(() => {
  interface mathOperation {
    (a: number, b: number): number;
  }

  let addNumbers: mathOperation;
  let subtractNumbers: mathOperation;
  let multiplyNumbers: mathOperation;
  let divideNumbers: mathOperation;

  addNumbers = (a: number, b: number): number => {
    return a + b;
  };

  subtractNumbers = (a: number, b: number): number => {
    return a - b;
  };

  multiplyNumbers = (a: number, b: number): number => {
    return a * b;
  };

  divideNumbers = (a: number, b: number): number => {
    if (b === 0) {
      throw new Error('División por cero no está permitida.');
    }
    return parseFloat((a / b).toFixed(2));
  };

  console.log(`addNumbers(49, 42) =`, addNumbers(49, 42));
  console.log(`subtractNumbers(49, 42) =`, subtractNumbers(49, 42));
  console.log(`multiplyNumbers(49, 42) =`, multiplyNumbers(49, 42));
  console.log(`divideNumbers(49, 42) =`, divideNumbers(49, 42));
})();
