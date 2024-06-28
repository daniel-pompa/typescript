//* Data Types
// Never - represents the type of values that never occur.

(() => {
  const throwError = (message: string): never => {
    throw new Error(message);
  };

  try {
    throwError('¡Ha ocurrido un error!');
  } catch (error) {
    console.error(error);
  }
})();
