//* Classes Basic
// A class is a blueprint for creating objects that have a set of properties and methods.
// It is a fundamental concept in object-oriented programming (OOP).
// Provides a structured way to model real-world entities and their behaviors within a program.

(() => {
  class Person {
    constructor(
      private _firstName: string,
      private _lastName: string,
      private _age: number,
      private _phone?: string,
      private _email?: string
    ) {
      if (this._age <= 0 || this._age >= 110) {
        throw new Error('La edad no es válida');
      }
    }

    get firstName() {
      return this._firstName;
    }

    set firstName(firstName: string) {
      this._firstName = firstName;
    }

    get lastName() {
      return this._lastName;
    }

    set lastName(lastName: string) {
      this._lastName = lastName;
    }

    get age() {
      return this._age;
    }

    set age(age: number) {
      if (age < 0 || age >= 110) {
        throw new Error('La edad no es válida');
      }
      this._age = age;
    }

    get phone() {
      return this._phone ?? 'No disponible';
    }

    set phone(phone: string) {
      this._phone = phone;
    }

    get email() {
      return this._email ?? 'No disponible';
    }

    set email(email: string) {
      this._email = email;
    }

    info() {
      return `Nombre: ${this._firstName}\nApellido: ${this._lastName}\nEdad: ${this._age} años\nTeléfono: ${this.phone}\nCorreo electrónico: ${this.email}`;
    }
  }

  //* Usage
  const person = new Person(
    'Daniel',
    'Pompa',
    49,
    '648 15 35 96',
    'daniel.pompa@gmail.com'
  );

  const gael = new Person('Gael', 'Pompa', 2);

  //* Output
  console.log(
    '%cClases básicas',
    'color:#1e40af; text-transform: uppercase; font-weight: bold;'
  );
  console.log(person.info());
  console.log(gael.info());
})();
