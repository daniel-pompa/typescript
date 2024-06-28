"use strict";
(() => {
    const fullName = (firstName, lastName, upperCase = false) => {
        if (upperCase) {
            return `${firstName} ${lastName || ''}`.toUpperCase().trim();
        }
        else {
            return `${firstName} ${lastName || ''}`.trim();
        }
    };
    const name = fullName('Gael', 'Pompa', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`.trim();
    };
    const name = fullName('Gael');
    console.log({ name });
})();
(() => {
    const maxOfThreeNumbers = (a, b, c) => {
        return Math.max(a, b, c);
    };
    const max = maxOfThreeNumbers(49, 42, 2);
    console.log({ max });
    const calculateArea = {
        square: (side) => side * side,
        rectangle: (length, width) => length * width,
        circle: (radius) => Math.PI * radius * radius,
        triangle: (base, height) => (base * height) / 2,
    };
    const areaSquare = calculateArea.square(5);
    console.log({ areaSquare });
    const areaRectangle = calculateArea.rectangle(8, 4);
    console.log({ areaRectangle });
    const areaCircle = calculateArea.circle(3);
    console.log({ areaCircle });
    const areaTriangle = calculateArea.triangle(4, 5);
    console.log({ areaTriangle });
    const greet = (firstName, lastName, age) => {
        const fullName = `${firstName} ${lastName}`;
        const message = `Hola, soy ${fullName}. Tengo ${age} años.`;
        return message;
    };
    const greeting = greet('Gael', 'Pompa', 2);
    console.log(greeting);
    const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const generateLotteryCombination = (min, max, amount) => {
        const combination = new Set();
        while (combination.size < amount) {
            const randomNumber = random(min, max);
            combination.add(randomNumber);
        }
        return Array.from(combination).sort((a, b) => a - b);
    };
    const generateComplementaryNumber = (min, max, amount) => {
        const numbers = new Set();
        while (numbers.size < amount) {
            numbers.add(random(min, max));
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };
    const primitiveCombination = generateLotteryCombination(1, 49, 6);
    const complementaryNumber = generateComplementaryNumber(0, 9, 1);
    const euromillionsCombination = generateLotteryCombination(1, 50, 5);
    const euromillionsStars = generateComplementaryNumber(1, 12, 2);
    const bonolotoCombination = generateLotteryCombination(1, 49, 6);
    console.log('%cLotería Primitiva', 'color:#1e40af; text-transform: uppercase; font-weight: bold');
    console.log('Combinación:', primitiveCombination);
    console.log('Número complementario:', complementaryNumber);
    console.log('%cEuromillones', 'color:#1e40af; text-transform: uppercase; font-weight: bold');
    console.log('Combinación:', euromillionsCombination);
    console.log('Estrellas:', euromillionsStars);
    console.log('%cBonoloto', 'color:#1e40af; text-transform: uppercase; font-weight: bold');
    console.log('Combinación:', bonolotoCombination);
})();
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const name = fullName('Gael', 'Pompa', 'Ciambrino');
    console.log({ name });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const myBelovedSon = () => 'Gael Pompa Ciambrino';
    let myFunction;
    myFunction = addNumbers;
    console.log({ myFunction });
    console.log(myFunction(1, 1));
    myFunction = greet;
    console.log({ myFunction });
    console.log(myFunction('Gael'));
    myFunction = myBelovedSon;
    console.log({ myFunction });
    console.log(myFunction());
})();
(() => {
    const hero = 'Aquiles';
    const info = 'Hijo del militar Peleo y de la ninfa del mar Tetis. Aquiles, el guerrero más poderoso de La Ilíada, está al mando de los mirmidones, soldados de su patria, Ftía (Grecia)';
    const getName = () => hero;
    const getInfo = () => info;
    const heroName = getName();
    const heroInfo = getInfo();
    console.log({ heroName });
    console.log(heroInfo);
})();
//# sourceMappingURL=main.js.map