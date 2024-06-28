"use strict";
(() => {
    let child = 'Gael';
    console.log({ child });
    child = {};
    child.name = 'Gael';
    child.age = 2;
    child.parents = {
        mother: 'Emma',
        father: 'Daniel',
    };
    console.log(child);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log({ numbers });
    const technologies = [
        'TypeScript',
        'MongoDB',
        'Express.js',
        'Node.js',
        'React',
    ];
    console.log({ technologies });
    technologies.forEach((tech, i) => console.log(`[${i}] ${tech}`));
})();
(() => {
    let isGael = true;
    const gael = isGael ? 'Gael' : false;
    console.log(gael);
    console.log({ isGael });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.medium;
    console.log(AudioLevel);
    console.log(`Nivel actual de audio: ${currentAudioLevel}`);
})();
(() => {
    const throwError = (message) => {
        throw new Error(message);
    };
    try {
        throwError('¡Ha ocurrido un error!');
    }
    catch (error) {
        console.error(error);
    }
})();
(() => {
    let nothing = undefined;
    console.log(nothing);
    let nullValue = null;
    console.log(nullValue);
})();
(() => {
    const accountBalance = 8000;
    const paymentAmount = 50;
    const hasCreditCard = true;
    console.log({ accountBalance });
    console.log({ paymentAmount });
    console.log({ hasCreditCard });
    if (accountBalance >= paymentAmount && hasCreditCard) {
        console.log('Puedes pagar con tu saldo o con tu tarjeta de crédito');
    }
    else if (accountBalance >= paymentAmount) {
        console.log('Puedes pagar con tu saldo');
    }
    else if (hasCreditCard) {
        console.log('Puedes pagar con tu tarjeta de crédito');
    }
    else {
        console.log('No tienes saldo suficiente');
    }
})();
(() => {
    const typeScript = 'TypeScript';
    const javaScript = 'JavaSCript';
    const message = `${typeScript} es un lenguaje de programación fuertemente tipado que se basa en ${javaScript}`;
    console.log(typeScript.toUpperCase());
    console.log(message);
})();
(() => {
    const person = ['Gael', 2, true];
    console.log(person);
})();
(() => {
    const message = (text) => {
        console.log(`Hola! ${text}`);
    };
    message('TypesCript es genial!');
})();
//# sourceMappingURL=main.js.map