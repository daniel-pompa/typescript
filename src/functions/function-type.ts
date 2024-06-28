//* Functions
// Function type - a function that accepts parameters and returns a value.

(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const myBelovedSon = () => 'Gael Pompa Ciambrino';

  //* Accepts the three functions
  let myFunction: Function;

  myFunction = addNumbers;
  console.log({ myFunction });
  console.log(myFunction(1, 1));

  myFunction = greet;
  console.log({ myFunction });
  console.log(myFunction('Gael'));

  myFunction = myBelovedSon;
  console.log({ myFunction });
  console.log(myFunction());

  //* Only accepts numbers and returns a number
  // let myFunction: (a: number, b: number) => number;
  // myFunction = addNumbers;
  // console.log({ myFunction });
  // console.log(myFunction(40, 9));

  //* Only accepts strings and returns a string
  // let myFunction: (name: string) => string;
  // myFunction = greet;
  // console.log({ myFunction });
  // console.log(myFunction('Gael'));
})();
