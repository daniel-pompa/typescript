//* Data Types
// Void - represents the type of the absence of a value.

(() => {
  const message = (text: string): void => {
    console.log(`Hola! ${text}`);
  };

  message('TypesCript es genial!');
})();
