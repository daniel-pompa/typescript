//* Interfaces
// An interface defines the structure of an object, specifying the properties and their types.
// It is used to enforce type-checking and ensure that objects adhere to a particular structure.

(() => {
  interface LotteryCombination {
    combination: Set<number>;
    complementaryNumber: number;
  }

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateLotteryCombination = (): LotteryCombination => {
    const combination = new Set<number>();

    while (combination.size < 6) {
      combination.add(getRandomNumber(1, 49));
    }

    const complementaryNumber = getRandomNumber(0, 9);

    return {
      combination,
      complementaryNumber,
    };
  };

  const lotteryCombination = generateLotteryCombination();

  const combinationArray = Array.from(lotteryCombination.combination);

  console.log('Combinación:', combinationArray);
  console.log('Número complementario:', lotteryCombination.complementaryNumber);
})();
