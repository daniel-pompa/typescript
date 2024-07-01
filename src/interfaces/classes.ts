//* Interfaces
// An interface defines the structure of an object, specifying the properties and their types.
// It is used to enforce type-checking and ensure that objects adhere to a particular structure.

(() => {
  interface IPerson {
    id: string;
    firstName: string;
    lastName: string;
    age?: number;
    getFullName(id: string): string;
    info(): string;
  }

  class Person implements IPerson {
    constructor(
      public id: string,
      public firstName: string,
      public lastName: string,
      public age?: number
    ) {}

    getFullName(id: string): string {
      return id === this.id
        ? `Nombre y apellido: ${this.firstName} ${this.lastName}`
        : `No existe persona con id ${id}`;
    }

    info(): string {
      return `Nombre: ${this.firstName} \nApellido: ${this.lastName} \nEdad: ${this.age} años`;
    }
  }

  //* Objects
  const person = new Person('dbdb8401-8bbb-4ce3-8eba-f8943e5e756d', 'Gael', 'Pompa', 2);

  //* Output
  console.log(person.info());
  console.log(person.getFullName('dbdb8401-8bbb-4ce3-8eba-f8943e5e756d'));
})();
