//* Functions
// Arguments optional - a function that accepts a variable number of arguments.

(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || ''}`.trim();
  };

  const name = fullName('Gael');
  console.log({ name });
})();
