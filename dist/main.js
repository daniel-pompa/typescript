"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
class Developer extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
    technologies() {
        return ['MongoDB', 'Express', 'React', 'Node.js'];
    }
    info() {
        console.log(`Desarrollador: ${this.firstName} ${this.lastName}, ${this.age} años`);
        console.log('Tecnologías:', this.technologies().join(' - '));
    }
}
class Customer extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
    contact() {
        return 'emma.ciambrino@gmail.com';
    }
    info() {
        console.log(`Cliente: ${this.firstName} ${this.lastName}, ${this.age} años`);
        console.log('Contacto:', this.contact());
    }
}
const printFullName = (person) => {
    console.log(person.firstName, person.lastName);
};
(() => {
    const developer = new Developer('Daniel', 'Pompa', 49);
    const customer = new Customer('Emma', 'Ciambrino', 42);
    console.log('%cClases Abstractas', 'color:#1e40af; text-transform: uppercase; font-weight: bold;');
    developer.info();
    customer.info();
    printFullName(developer);
    printFullName(customer);
})();
(() => {
    class Person {
        constructor(_firstName, _lastName, _age, _phone, _email) {
            this._firstName = _firstName;
            this._lastName = _lastName;
            this._age = _age;
            this._phone = _phone;
            this._email = _email;
            if (this._age <= 0 || this._age >= 110) {
                throw new Error('La edad no es válida');
            }
        }
        get firstName() {
            return this._firstName;
        }
        set firstName(firstName) {
            this._firstName = firstName;
        }
        get lastName() {
            return this._lastName;
        }
        set lastName(lastName) {
            this._lastName = lastName;
        }
        get age() {
            return this._age;
        }
        set age(age) {
            if (age < 0 || age >= 110) {
                throw new Error('La edad no es válida');
            }
            this._age = age;
        }
        get phone() {
            var _a;
            return (_a = this._phone) !== null && _a !== void 0 ? _a : 'No disponible';
        }
        set phone(phone) {
            this._phone = phone;
        }
        get email() {
            var _a;
            return (_a = this._email) !== null && _a !== void 0 ? _a : 'No disponible';
        }
        set email(email) {
            this._email = email;
        }
        info() {
            return `Nombre: ${this._firstName}\nApellido: ${this._lastName}\nEdad: ${this._age} años\nTeléfono: ${this.phone}\nCorreo electrónico: ${this.email}`;
        }
    }
    const person = new Person('Daniel', 'Pompa', 49, '648 15 35 96', 'daniel.pompa@gmail.com');
    const gael = new Person('Gael', 'Pompa', 2);
    console.log('%cClases básicas', 'color:#1e40af; text-transform: uppercase; font-weight: bold;');
    console.log(person.info());
    console.log(gael.info());
})();
(() => {
    class Person {
        constructor(_firstName, _lastName, _age, _phone, _email) {
            this._firstName = _firstName;
            this._lastName = _lastName;
            this._age = _age;
            this._phone = _phone;
            this._email = _email;
            this.validateAge(_age);
        }
        get firstName() {
            return this._firstName;
        }
        set firstName(firstName) {
            this._firstName = firstName;
        }
        get lastName() {
            return this._lastName;
        }
        set lastName(lastName) {
            this._lastName = lastName;
        }
        get age() {
            return this._age;
        }
        set age(age) {
            this.validateAge(age);
            this._age = age;
        }
        get phone() {
            var _a;
            return (_a = this._phone) !== null && _a !== void 0 ? _a : 'No disponible';
        }
        set phone(phone) {
            this._phone = phone;
        }
        get email() {
            var _a;
            return (_a = this._email) !== null && _a !== void 0 ? _a : 'No disponible';
        }
        set email(email) {
            this._email = email;
        }
        info() {
            return `Nombre: ${this._firstName}\nApellido: ${this._lastName}\nEdad: ${this._age}\nTeléfono: ${this.phone}\nCorreo electrónico: ${this.email}`;
        }
        get fullName() {
            return `${this._firstName} ${this._lastName}`;
        }
        validateAge(age) {
            if (age < 0 || age >= 110) {
                throw new Error('La edad no es válida');
            }
        }
    }
    class Developer extends Person {
        constructor(firstName, lastName, age, phone, email, _technologies) {
            super(firstName, lastName, age, phone, email);
            this._technologies = _technologies;
        }
        get technologies() {
            return this._technologies;
        }
        set technologies(technologies) {
            this._technologies = technologies;
        }
        get fullNameFromPerson() {
            return super.fullName;
        }
        info() {
            return `${super.info()}\nTecnologías: ${this._technologies.join(' - ')}`;
        }
    }
    const gael = new Person('Gael', 'Pompa', 2);
    const daniel = new Developer('Daniel', 'Pompa', 49, '648 16 78 93', 'daniel.pompa@gmail.com', ['TypeScript', 'MongoDB', 'Express.js', 'React', 'Node.js']);
    console.log('%cHerencia', 'color:#1e40af; text-transform: uppercase; font-weight: bold;');
    console.log(gael.info());
    console.log(daniel.info());
    console.log('daniel.fullNameFromPerson:', daniel.fullNameFromPerson);
})();
(() => {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        static getInstance() {
            if (!Person.instance) {
                Person.instance = new Person('Daniel', 'Pompa Pareja');
            }
            return Person.instance;
        }
        changeName(newFirstName, newLastName) {
            this.firstName = newFirstName;
            this.lastName = newLastName;
        }
    }
    const person1 = Person.getInstance();
    const person2 = Person.getInstance();
    const person3 = Person.getInstance();
    person1.changeName('Gael', 'Pompa');
    console.log('%cPatrón Singleton', 'color:#1e40af; text-transform: uppercase; font-weight: bold;');
    console.log(person1);
    console.log(person2);
    console.log(person3);
})();
//# sourceMappingURL=main.js.map