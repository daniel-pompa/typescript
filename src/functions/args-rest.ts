//* Functions
// Arguments rest - a function that accepts a variable number of arguments in an array.

(() => {
  const fullName = (firstName: string, ...rest: string[]): string => {
    return `${firstName} ${rest.join(' ')}`;
  };

  const name = fullName('Gael', 'Pompa', 'Ciambrino');
  console.log({ name });
})();
