//* Data Types
// Arrays - a collection of values of a specified type.

(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log({ numbers });

  const technologies: string[] = [
    'TypeScript',
    'MongoDB',
    'Express.js',
    'Node.js',
    'React',
  ];
  console.log({ technologies });

  technologies.forEach((tech, i) => console.log(`[${i}] ${tech}`));
})();
