//* Functions
// Args required - a function that accepts a fixed number of arguments.

(() => {
  const maxOfThreeNumbers = (a: number, b: number, c: number): number => {
    return Math.max(a, b, c);
  };

  const max = maxOfThreeNumbers(49, 42, 2);
  console.log({ max });

  // An object that calculates the area of different shapes.
  const calculateArea = {
    square: (side: number): number => side * side,
    rectangle: (length: number, width: number): number => length * width,
    circle: (radius: number): number => Math.PI * radius * radius,
    triangle: (base: number, height: number): number => (base * height) / 2,
  };

  // Calculates the area of a square
  const areaSquare = calculateArea.square(5);
  console.log({ areaSquare });

  // Calculates the area of a rectangle
  const areaRectangle = calculateArea.rectangle(8, 4);
  console.log({ areaRectangle });

  // Calculates the area of a circle
  const areaCircle = calculateArea.circle(3);
  console.log({ areaCircle });

  // Calculates the area of a triangle
  const areaTriangle = calculateArea.triangle(4, 5);
  console.log({ areaTriangle });

  // Generates a greeting message for a person
  const greet = (firstName: string, lastName: string, age: number): string => {
    const fullName = `${firstName} ${lastName}`;
    const message = `Hola, soy ${fullName}. Tengo ${age} años.`;
    return message;
  };

  const greeting = greet('Gael', 'Pompa', 2);
  console.log(greeting);

  // Generates a random number between min and max inclusive and returns it
  const random = (a: number, b: number): number =>
    Math.floor(Math.random() * (b - a + 1)) + a;

  // Generates a lottery combination of 6 numbers between 1 and 49
  const generateLotteryCombination = (
    min: number,
    max: number,
    amount: number
  ): number[] => {
    const combination = new Set<number>();

    while (combination.size < amount) {
      const randomNumber = random(min, max);
      combination.add(randomNumber);
    }

    return Array.from(combination).sort((a, b) => a - b);
  };

  // Generates a complementary number between min and max inclusive
  const generateComplementaryNumber = (
    min: number,
    max: number,
    amount: number
  ): number[] => {
    const numbers: Set<number> = new Set();

    while (numbers.size < amount) {
      numbers.add(random(min, max));
    }

    return Array.from(numbers).sort((a, b) => a - b);
  };

  const primitiveCombination: number[] = generateLotteryCombination(1, 49, 6);
  const complementaryNumber: number[] = generateComplementaryNumber(0, 9, 1);
  const euromillionsCombination: number[] = generateLotteryCombination(1, 50, 5);
  const euromillionsStars: number[] = generateComplementaryNumber(1, 12, 2);
  const bonolotoCombination: number[] = generateLotteryCombination(1, 49, 6);

  console.log(
    '%cLotería Primitiva',
    'color:#1e40af; text-transform: uppercase; font-weight: bold'
  );
  console.log('Combinación:', primitiveCombination);
  console.log('Número complementario:', complementaryNumber);

  console.log(
    '%cEuromillones',
    'color:#1e40af; text-transform: uppercase; font-weight: bold'
  );
  console.log('Combinación:', euromillionsCombination);
  console.log('Estrellas:', euromillionsStars);

  console.log(
    '%cBonoloto',
    'color:#1e40af; text-transform: uppercase; font-weight: bold'
  );
  console.log('Combinación:', bonolotoCombination);
})();
