//* Interfaces
// Interfaces define the structure of an object, specifying the properties and their types.
// They are used to enforce type-checking and ensure that objects adhere to a particular structure.

(() => {
  interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    getFirstName: () => string;
    getLastName: () => string;
    getAge: () => number;
    getEmail: () => string;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setAge: (age: number) => void;
    setEmail: (email: string) => void;
    info: () => string;
  }

  //* Objects
  const daniel: Person = {
    firstName: 'Daniel',
    lastName: 'Pompa',
    age: 49,
    email: 'daniel.pompa@gmail.com',

    getFirstName(): string {
      return this.firstName;
    },

    getLastName(): string {
      return this.lastName;
    },

    getAge(): number {
      return this.age;
    },

    getEmail(): string {
      return this.email;
    },

    setFirstName(firstName: string): void {
      this.firstName = firstName;
    },

    setLastName(lastName: string): void {
      this.lastName = lastName;
    },

    setAge(age: number): void {
      this.age = age;
    },

    setEmail(email: string): void {
      this.email = email;
    },

    info(): string {
      return `Nombre: ${this.firstName} \nApellido: ${this.lastName} \nCorreo electrónico: ${this.email} \nEdad: ${this.age} años`;
    },
  };

  //* Output
  console.log(daniel.info());
})();
