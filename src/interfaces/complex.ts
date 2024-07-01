//* Interfaces
// An interface defines the structure of an object, specifying the properties and their types.
// It is used to enforce type-checking and ensure that objects adhere to a particular structure.

(() => {
  interface Customer {
    uuid: string;
    firstName: string;
    lastName: string;
    age?: number;
    phone: string;
    email: string;
    address: Address; // Nested Address object
  }

  interface Address {
    id: string;
    street: string;
    postcode: string;
    city: string;
  }

  const customer: Customer = {
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

  const getCustomer = (uuid: string): string => {
    const { street, postcode, city } = customer.address;
    if (uuid !== customer.uuid) {
      throw new Error(`No existe cliente con uuid ${uuid}`);
    }
    return `Nombre: ${customer.firstName}\nApellido: ${customer.lastName}\nEdad: ${customer.age}\nCorreo electrónico: ${customer.email}\nTeléfono: ${customer.phone}\nDirección: ${street}, ${postcode}, ${city}`;
  };

  const getFullAddress = (id: string): string => {
    if (id !== customer.address.id) {
      throw new Error(`No existe dirección con id ${id}`);
    }
    return `${customer.address.street}, ${customer.address.postcode}, ${customer.address.city}`;
  };

  //* Output
  console.log(getCustomer('9db13c9f-b27b-4018-8025-64d8f46dfe8t'));
  console.log(getFullAddress('8eb13c9f-b27b-4018-8025-64d8f46dfeff'));
})();
