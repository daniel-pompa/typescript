//* Classes in ES6

(() => {
  class Customer {
    constructor(
      firstName = 'Nombre',
      lastName = 'Apellido',
      age = 0,
      phone = 'Teléfono',
      email = 'Correo electrónico'
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.phone = phone;
      this.email = email;
    }
  }

  class CustomerPremium extends Customer {
    constructor(firstName, lastName, age, phone, email) {
      super(firstName, lastName, age, phone, email);
      this.premium = true;
    }
  }

  console.log(
    '%cClasses in ES6',
    'color:#1e40af; text-transform:uppercase; font-weight: bold'
  );

  const daniel = new Customer(
    'Daniel',
    'Pompa',
    49,
    '648 50 98 33',
    'daniel.pompa@gmail.com'
  );

  const { firstName, lastName, age, phone, email } = daniel;

  console.log(
    `Nombre: ${firstName} ${lastName}\nEdad: ${age}\nTeléfono: ${phone}\nCorreo electrónico: ${email}`
  );

  const emma = new CustomerPremium(
    'Emma',
    'Ciambrino',
    42,
    '669 85 64 20',
    'emma.ciambrino@gmail.com'
  );

  console.log(
    `Nombre: ${emma.firstName} ${emma.lastName}\nTeléfono: ${emma.phone}\nCorreo electrónico: ${emma.email}`
  );
})();
