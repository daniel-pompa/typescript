//* Functions
// Arguments default - a function that accepts a variable number of arguments and a default value.

(() => {
  const fullName = (
    firstName: string,
    lastName: string,
    upperCase: boolean = false
  ): string => {
    if (upperCase) {
      return `${firstName} ${lastName || ''}`.toUpperCase().trim();
    } else {
      return `${firstName} ${lastName || ''}`.trim();
    }
  };

  const name = fullName('Gael', 'Pompa', true);
  console.log({ name });
})();
