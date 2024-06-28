//* Functions
// Function - a code block that performs a task or calculates a value.

(() => {
  const hero: string = 'Aquiles';
  const info: string =
    'Hijo del militar Peleo y de la ninfa del mar Tetis. Aquiles, el guerrero más poderoso de La Ilíada, está al mando de los mirmidones, soldados de su patria, Ftía (Grecia)';

  const getName = (): string => hero;
  const getInfo = (): string => info;

  const heroName = getName();
  const heroInfo = getInfo();

  console.log({ heroName });
  console.log(heroInfo);
})();
