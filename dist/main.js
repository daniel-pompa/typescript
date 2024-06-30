"use strict";
(() => {
    const razvan = {
        name: 'Razvan',
        lastName: 'Ilies',
        age: 38,
        profession: 'Desarrollador MEVN Stack',
        technologies: ['TypeScript', 'MongoDB', 'Express.js', 'Vue.js', 'Node.js'],
        getName() {
            return this.name;
        },
        getLastName() {
            return this.lastName;
        },
        getAge() {
            return this.age;
        },
        getProfession() {
            return this.profession;
        },
        getTechnologies() {
            return this.technologies;
        },
    };
    const translationMap = {
        name: 'Nombre',
        lastName: 'Apellido',
        age: 'Edad',
        profession: 'Profesión',
        technologies: 'Tecnologías',
    };
    const entries = Object.keys(razvan)
        .filter(key => typeof razvan[key] !== 'function')
        .map(key => [key, razvan[key]]);
    console.log('%cObjetos', 'color:#1e40af; text-transform:uppercase; font-weight: bold');
    for (const [key, value] of entries) {
        const translatedKey = translationMap[key] || key;
        console.log(`${translatedKey}:`, value);
    }
})();
(() => {
    const createPerson = (name, surnames, age, email, profession, technologies) => ({
        name,
        surnames,
        age,
        email,
        profession,
        technologies,
    });
    const developer = createPerson('Daniel', 'Pompa Pareja', 49, 'daniel.pompa@me.com', 'Desarrollador MERN Stack', ['TypeScript', 'MongoDB', 'Express.js', 'React', 'Node.js']);
    const { name, surnames, age, email, profession, technologies } = developer;
    console.log('%cTypes', 'color:#1e40af; text-transform:uppercase; font-weight: bold');
    console.log(`Nombre: ${name} ${surnames}`);
    console.log('Edad:', age);
    console.log(`Correo electrónico: ${email}`);
    console.log(`Profesión: ${profession}`);
    console.log('Tecnologías:', [...technologies]);
})();
const children = [
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
const emma = {
    name: 'Emma',
    surnames: 'Ciambrino Baz',
    age: 42,
    email: 'emma.ciambrino@gmail.co',
    profession: 'Analista de Mercados Internacionales',
    children: children,
};
const daniel = {
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
const catInBoots = {
    name: 'El Gato con Botas',
    location: 'Madrid',
    children: children,
    getChildrenList: function () {
        return this.children;
    },
};
const printPersonInfo = (person) => {
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
const printChildren = (children) => {
    console.log('Hijos:');
    children.forEach(child => {
        console.log(`- ${child.name} ${child.surnames}, Edad: ${child.age} años`);
    });
};
const printActivities = (child) => {
    if (child.activities && child.activities.length > 0) {
        console.log(`Actividades:`);
        child.activities.forEach(activity => {
            console.log(`- ${activity}`);
        });
    }
    else {
        console.log('Actividades: Ninguna');
    }
};
console.log('%cUnion Types', 'color:#1e40af; text-transform:uppercase; font-weight: bold');
console.log('%cInformación de Emma', 'color:#b91c1c; text-transform:uppercase; font-weight: bold');
printPersonInfo(emma);
printChildren(emma.children);
console.log('%cInformación de Daniel', 'color:#b91c1c; text-transform:uppercase; font-weight: bold');
printPersonInfo(daniel);
printChildren(daniel.children);
console.log('%cGuardería', 'color:#b91c1c; text-transform:uppercase; font-weight: bold');
console.log(`Nombre de la Guardería: ${catInBoots.name}`);
console.log(`Ubicación: Calle Falsa 47, ${catInBoots.location}`);
console.log('%cActividades en la Guardería', 'color:#b91c1c; text-transform:uppercase; font-weight: bold');
catInBoots.getChildrenList().forEach(child => {
    console.log(`Nombre: ${child.name}, Edad: ${child.age} años`);
    printActivities(child);
});
//# sourceMappingURL=main.js.map