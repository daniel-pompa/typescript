(() => {
  //* Objects
  // Objects - are collections of properties and methods. They are used to store data.

  const razvan: {
    name: string;
    lastName: string;
    age: number;
    profession: string;
    technologies: string[];
    getName?: () => string;
    getLastName?: () => string;
    getAge?: () => number;
    getProfession?: () => string;
    getTechnologies?: () => string[];
  } = {
    name: 'Razvan',
    lastName: 'Ilies',
    age: 38,
    profession: 'Desarrollador MEVN Stack',
    technologies: ['TypeScript', 'MongoDB', 'Express.js', 'Vue.js', 'Node.js'],

    //* Methods
    getName(): string {
      return this.name;
    },
    getLastName(): string {
      return this.lastName;
    },
    getAge(): number {
      return this.age;
    },
    getProfession(): string {
      return this.profession;
    },
    getTechnologies(): string[] {
      return this.technologies;
    },
  };

  // Translation map for the properties
  const translationMap: { [key: string]: string } = {
    name: 'Nombre',
    lastName: 'Apellido',
    age: 'Edad',
    profession: 'Profesión',
    technologies: 'Tecnologías',
  };

  // Extracts the key-value pairs from the razvan object, excluding methods.
  const entries = Object.keys(razvan)
    .filter(key => typeof razvan[key as keyof typeof razvan] !== 'function')
    .map(key => [key, razvan[key as keyof typeof razvan]] as [string, number]);

  //* Output
  console.log('%cObjetos', 'color:#1e40af; text-transform:uppercase; font-weight: bold');

  for (const [key, value] of entries) {
    const translatedKey = translationMap[key] || key;
    console.log(`${translatedKey}:`, value);
  }
})();
