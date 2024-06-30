(() => {
  //* Object Types
  // Types - define the structure of an object. They are used to describe its properties, methods and their types.
  // This is useful for type checking and ensuring that objects conform to a specific shape.

  // Define the structure of an object
  type Person = {
    name: string;
    surnames: string;
    age: number;
    email: string;
    profession: string;
    technologies: string[];
  };

  // Factory function to create a Person object
  // This function takes several parameters and returns a new Person object.
  const createPerson = (
    name: string,
    surnames: string,
    age: number,
    email: string,
    profession: string,
    technologies: string[]
  ): Person => ({
    name,
    surnames,
    age,
    email,
    profession,
    technologies,
  });

  // Creating a Person object
  // Using the factory function to create an instance of Person.
  const developer = createPerson(
    'Daniel',
    'Pompa Pareja',
    49,
    'daniel.pompa@me.com',
    'Desarrollador MERN Stack',
    ['TypeScript', 'MongoDB', 'Express.js', 'React', 'Node.js']
  );

  //* Destructuring the properties of the object
  // This allows for easier access to the properties of the developer object.
  const { name, surnames, age, email, profession, technologies } = developer;

  //* Output
  console.log('%cTypes', 'color:#1e40af; text-transform:uppercase; font-weight: bold');
  console.log(`Nombre: ${name} ${surnames}`);
  console.log('Edad:', age);
  console.log(`Correo electrónico: ${email}`);
  console.log(`Profesión: ${profession}`);
  console.log('Tecnologías:', [...technologies]);
})();
