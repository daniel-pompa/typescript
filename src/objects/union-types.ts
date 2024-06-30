//* Union Types
// Union Types - defines an object that can have more than one type for its properties.
// They are useful for describing objects that can take different forms, allowing flexibility in the definition of types.

// Types
type Child = {
  name: string;
  surnames: string;
  age: number;
  activities?: string[];
};

type Person = {
  name: string;
  surnames: string;
  age: number;
  email?: string;
  profession?: string;
  children?: Child[];
  wife?: Person;
  husband?: Person;
};

type Daycare = {
  name: string;
  location: string;
  children: Child[];
  getChildrenList: () => Child[];
};

// Objects
const children: Child[] = [
  {
    name: 'Gael',
    surnames: 'Pompa Ciambrino',
    age: 2,
    activities: [
      'Inglés',
      'Estimulación sensorial',
      'Estimulación psicomotriz',
      'Estimulación cognitiva',
      'Música y lectura',
      'Actividades pedagógicas',
    ],
  },
  {
    name: 'Emma',
    surnames: 'Pompa Ciambrino',
    age: 1,
    activities: [
      'Estimulación sensorial',
      'Estimulación psicomotriz',
      'Estimulación cognitiva',
      'Actividades pedagógicas',
    ],
  },
];

const emma: Person = {
  name: 'Emma',
  surnames: 'Ciambrino Baz',
  age: 42,
  email: 'emma.ciambrino@gmail.co',
  profession: 'Analista de Mercados Internacionales',
  children: children,
};

const daniel: Person = {
  name: 'Daniel',
  surnames: 'Pompa Pareja',
  age: 49,
  email: 'daniel.pompa@gmail.com',
  profession: 'Desarrollador MERN Stack',
  children: children,
  wife: emma,
};

emma.husband = daniel;
daniel.wife = emma;

const catInBoots: Daycare = {
  name: 'El Gato con Botas',
  location: 'Madrid',
  children: children,
  getChildrenList: function () {
    return this.children;
  },
};

// Functions
const printPersonInfo = (person: Person) => {
  const { name, surnames, age, email, profession, husband, wife } = person;
  console.log(`Nombre: ${name} ${surnames}`);
  console.log(`Edad: ${age}`);
  console.log(`Correo electrónico: ${email}`);
  console.log(`Profesión: ${profession}`);
  if (person.husband) {
    console.log(`Cónyuge: ${husband.name} ${husband.surnames}`);
  }
  if (person.wife) {
    console.log(`Cónyuge: ${wife.name} ${wife.surnames}`);
  }
};

const printChildren = (children: Child[]) => {
  console.log('Hijos:');
  children.forEach(child => {
    console.log(`- ${child.name} ${child.surnames}, Edad: ${child.age} años`);
  });
};

const printActivities = (child: Child) => {
  if (child.activities && child.activities.length > 0) {
    console.log(`Actividades:`);
    child.activities.forEach(activity => {
      console.log(`- ${activity}`);
    });
  } else {
    console.log('Actividades: Ninguna');
  }
};

// Output
console.log(
  '%cUnion Types',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

console.log(
  '%cInformación de Emma',
  'color:#b91c1c; text-transform:uppercase; font-weight: bold'
);
printPersonInfo(emma);
printChildren(emma.children);

console.log(
  '%cInformación de Daniel',
  'color:#b91c1c; text-transform:uppercase; font-weight: bold'
);
printPersonInfo(daniel);
printChildren(daniel.children);

console.log('%cGuardería', 'color:#b91c1c; text-transform:uppercase; font-weight: bold');
console.log(`Nombre de la Guardería: ${catInBoots.name}`);
console.log(`Ubicación: Calle Falsa 47, ${catInBoots.location}`);

console.log(
  '%cActividades en la Guardería',
  'color:#b91c1c; text-transform:uppercase; font-weight: bold'
);
catInBoots.getChildrenList().forEach(child => {
  console.log(`Nombre: ${child.name}, Edad: ${child.age} años`);
  printActivities(child);
});
