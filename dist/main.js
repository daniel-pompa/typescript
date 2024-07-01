"use strict";
(() => {
    const daniel = {
        firstName: 'Daniel',
        lastName: 'Pompa',
        age: 49,
        email: 'daniel.pompa@gmail.com',
        getFirstName() {
            return this.firstName;
        },
        getLastName() {
            return this.lastName;
        },
        getAge() {
            return this.age;
        },
        getEmail() {
            return this.email;
        },
        setFirstName(firstName) {
            this.firstName = firstName;
        },
        setLastName(lastName) {
            this.lastName = lastName;
        },
        setAge(age) {
            this.age = age;
        },
        setEmail(email) {
            this.email = email;
        },
        info() {
            return `Nombre: ${this.firstName} \nApellido: ${this.lastName} \nCorreo electrónico: ${this.email} \nEdad: ${this.age} años`;
        },
    };
    console.log(daniel.info());
})();
(() => {
    class Person {
        constructor(id, firstName, lastName, age) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        getFullName(id) {
            return id === this.id
                ? `Nombre y apellido: ${this.firstName} ${this.lastName}`
                : `No existe persona con id ${id}`;
        }
        info() {
            return `Nombre: ${this.firstName} \nApellido: ${this.lastName} \nEdad: ${this.age} años`;
        }
    }
    const person = new Person('dbdb8401-8bbb-4ce3-8eba-f8943e5e756d', 'Gael', 'Pompa', 2);
    console.log(person.info());
    console.log(person.getFullName('dbdb8401-8bbb-4ce3-8eba-f8943e5e756d'));
})();
(() => {
    const customer = {
        uuid: '9db13c9f-b27b-4018-8025-64d8f46dfe8t',
        firstName: 'Emma',
        lastName: 'Ciambrino',
        age: 42,
        phone: '669 85 34 67',
        email: 'emma.ciambrino@gmail.com',
        address: {
            id: '8eb13c9f-b27b-4018-8025-64d8f46dfeff',
            street: 'Calle falsa 30',
            postcode: '28001',
            city: 'Madrid',
        },
    };
    const getCustomer = (uuid) => {
        const { street, postcode, city } = customer.address;
        if (uuid !== customer.uuid) {
            throw new Error(`No existe cliente con uuid ${uuid}`);
        }
        return `Nombre: ${customer.firstName}\nApellido: ${customer.lastName}\nEdad: ${customer.age}\nCorreo electrónico: ${customer.email}\nTeléfono: ${customer.phone}\nDirección: ${street}, ${postcode}, ${city}`;
    };
    const getFullAddress = (id) => {
        if (id !== customer.address.id) {
            throw new Error(`No existe dirección con id ${id}`);
        }
        return `${customer.address.street}, ${customer.address.postcode}, ${customer.address.city}`;
    };
    console.log(getCustomer('9db13c9f-b27b-4018-8025-64d8f46dfe8t'));
    console.log(getFullAddress('8eb13c9f-b27b-4018-8025-64d8f46dfeff'));
})();
(() => {
    let addNumbers;
    let subtractNumbers;
    let multiplyNumbers;
    let divideNumbers;
    addNumbers = (a, b) => {
        return a + b;
    };
    subtractNumbers = (a, b) => {
        return a - b;
    };
    multiplyNumbers = (a, b) => {
        return a * b;
    };
    divideNumbers = (a, b) => {
        if (b === 0) {
            throw new Error('División por cero no está permitida.');
        }
        return parseFloat((a / b).toFixed(2));
    };
    console.log(`addNumbers(49, 42) =`, addNumbers(49, 42));
    console.log(`subtractNumbers(49, 42) =`, subtractNumbers(49, 42));
    console.log(`multiplyNumbers(49, 42) =`, multiplyNumbers(49, 42));
    console.log(`divideNumbers(49, 42) =`, divideNumbers(49, 42));
})();
(() => {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const generateLotteryCombination = () => {
        const combination = new Set();
        while (combination.size < 6) {
            combination.add(getRandomNumber(1, 49));
        }
        const complementaryNumber = getRandomNumber(0, 9);
        return {
            combination,
            complementaryNumber,
        };
    };
    const lotteryCombination = generateLotteryCombination();
    const combinationArray = Array.from(lotteryCombination.combination);
    console.log('Combinación:', combinationArray);
    console.log('Número complementario:', lotteryCombination.complementaryNumber);
})();
//# sourceMappingURL=main.js.map