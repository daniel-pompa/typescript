//* Destructuring
// Destructuring allows you to destructure an object or an array into multiple variables.

(() => {
  // Type
  type Technologies = {
    typescript: string;
    mongodb: string;
    express: string;
    react: string;
    node: string;
    stack: boolean;
  };

  // Object
  const technologies = {
    typescript: 'TypeScript',
    mongodb: 'MongoDB',
    express: 'Express',
    react: 'React',
    node: 'Node.js',
    stack: true,
  };

  console.log(
    '%cObject Destructuring',
    'color:#1e40af; text-transform:uppercase; font-weight: bold'
  );
  const { mongodb, express, react, node } = technologies;

  console.log(
    `${mongodb.charAt(0)}${express.charAt(0)}${react.charAt(0)}${node.charAt(0)} Stack`
  );

  console.log(`${mongodb} - ${express} - ${react} - ${node}`);

  console.log(
    '%cRest Operator',
    'color:#1e40af; text-transform:uppercase; font-weight: bold'
  );
  const printTechnologies = ({ typescript, ...rest }: Technologies) => {
    console.log(
      `${typescript} - ${rest.mongodb} - ${rest.express} - ${rest.react} - ${rest.node}`
    );
  };

  printTechnologies(technologies);

  console.log(
    '%cArray Destructuring',
    'color:#1e40af; text-transform:uppercase; font-weight: bold'
  );
  const technologiesArray: [string, string, string, string, string] = [
    'TypeScript',
    'MongoDB',
    'Express',
    'React',
    'Node.js',
  ];

  const [, m, e, r, n] = technologiesArray;

  console.log(m, e, r, n);
})();
