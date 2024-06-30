//* Classes Inheritance
// Inheritance is a fundamental concept where a new class (subclass) can be created based on an existing class (superclass)
// This allows the subclass to inherit attributes and methods from the superclass, promoting code reuse and hierarchical organization.

(() => {
  //* Superclass
  class Person {
    constructor(
      private _firstName: string,
      private _lastName: string,
      private _age: number,
      private _phone?: string,
      private _email?: string
    ) {
      this.validateAge(_age);
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
      this.validateAge(age);
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
      return `Nombre: ${this._firstName}\nApellido: ${this._lastName}\nEdad: ${this._age}\nTeléfono: ${this.phone}\nCorreo electrónico: ${this.email}`;
    }

    protected get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }

    private validateAge(age: number) {
      if (age < 0 || age >= 110) {
        throw new Error('La edad no es válida');
      }
    }
  }

  //* Subclass
  class Developer extends Person {
    constructor(
      firstName: string,
      lastName: string,
      age: number,
      phone: string,
      email: string,
      private _technologies: string[]
    ) {
      super(firstName, lastName, age, phone, email);
    }

    get technologies() {
      return this._technologies;
    }

    set technologies(technologies: string[]) {
      this._technologies = technologies;
    }

    get fullNameFromPerson() {
      return super.fullName;
    }

    info() {
      // Reusing the 'info' method from the superclass and adding developer-specific information
      return `${super.info()}\nTecnologías: ${this._technologies.join(' - ')}`;
    }
  }

  //* Usage
  const gael = new Person('Gael', 'Pompa', 2);

  const daniel = new Developer(
    'Daniel',
    'Pompa',
    49,
    '648 16 78 93',
    'daniel.pompa@gmail.com',
    ['TypeScript', 'MongoDB', 'Express.js', 'React', 'Node.js']
  );

  //* Output
  console.log(
    '%cHerencia',
    'color:#1e40af; text-transform: uppercase; font-weight: bold;'
  );
  console.log(gael.info());
  console.log(daniel.info());
  console.log('daniel.fullNameFromPerson:', daniel.fullNameFromPerson);
})();
