//* Classes Abstract
// An abstract class is a class that cannot be instantiated directly.
// It serves as a blueprint for other classes that will inherit from it.

// Abstract class definition for Person
abstract class Person {
  constructor(public firstName: string, public lastName: string, public age: number) {}

  // Abstract method to be implemented by subclasses
  abstract info(): void;
}

// Developer class inheriting from Person
class Developer extends Person {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }

  // Method specific to Developer class
  technologies() {
    return ['MongoDB', 'Express', 'React', 'Node.js'];
  }

  // Implementation of info method for Developer
  info() {
    console.log(`Desarrollador: ${this.firstName} ${this.lastName}, ${this.age} años`);
    console.log('Tecnologías:', this.technologies().join(' - '));
  }
}

// Customer class inheriting from Person
class Customer extends Person {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }

  // Method specific to Customer class
  contact() {
    return 'emma.ciambrino@gmail.com';
  }

  // Implementation of info method for Customer
  info() {
    console.log(`Cliente: ${this.firstName} ${this.lastName}, ${this.age} años`);
    console.log('Contacto:', this.contact());
  }
}

// Function to print full name of a Person object
const printFullName = (person: Person) => {
  console.log(person.firstName, person.lastName);
};

//* Usage
(() => {
  const developer = new Developer('Daniel', 'Pompa', 49);
  const customer = new Customer('Emma', 'Ciambrino', 42);

  console.log(
    '%cClases Abstractas',
    'color:#1e40af; text-transform: uppercase; font-weight: bold;'
  );
  developer.info();
  customer.info();

  printFullName(developer);
  printFullName(customer);
})();
