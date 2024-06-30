//* Singleton Pattern
// A Singleton Pattern is a design pattern that restricts the instantiation of a class to one object.
// This is useful when you want to ensure that a class has only one instance and provide a global point of access to it.

(() => {
  class Person {
    private static instance: Person; // The single instance of the Person class.

    private constructor(public firstName: string, public lastName: string) {}

    // Get the single instance of the Person class.
    public static getInstance(): Person {
      if (!Person.instance) {
        Person.instance = new Person('Daniel', 'Pompa Pareja');
      }

      return Person.instance;
    }

    // Method to change the first name and last name.
    public changeName(newFirstName: string, newLastName: string): void {
      this.firstName = newFirstName;
      this.lastName = newLastName;
    }
  }

  //* Usage of the Singleton pattern
  const person1 = Person.getInstance();
  const person2 = Person.getInstance();
  const person3 = Person.getInstance();

  // Changing the first name and last name
  person1.changeName('Gael', 'Pompa');

  //* Output
  console.log(
    '%cPatrón Singleton',
    'color:#1e40af; text-transform: uppercase; font-weight: bold;'
  );
  console.log(person1);
  console.log(person2);
  console.log(person3);
})();
