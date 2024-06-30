//* For of
// For of loops are used to iterate over iterable objects (arrays, strings, maps, sets, and more).

(() => {
  type Customer = {
    name: string;
    surname: string;
    phone: string;
    email: string;
  };

  const emma: Customer = {
    name: 'Emma',
    surname: 'Ciambrino',
    phone: '669 79 09 60',
    email: 'emma.ciambrino@gmail.com',
  };

  const daniel: Customer = {
    name: 'Daniel',
    surname: 'Pompa',
    phone: '648 20 36 85',
    email: 'daniel.pompa@gmail.com',
  };

  const oscar: Customer = {
    name: 'Óscar',
    surname: 'Pompa',
    phone: '656 14 56 34',
    email: 'oscar.pompa@gmail.com',
  };

  const customers: Customer[] = [emma, daniel, oscar];

  console.log(
    '%cFor of Loop',
    'color:#1e40af; text-transform:uppercase; font-weight: bold'
  );
  console.log(customers);

  for (const customer of customers) {
    console.log(
      `${customer.name} ${customer.surname}\nCorreo electrónico: ${customer.email}`
    );
  }
})();
