# Basic and Advanced TypeScript Concepts

What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

TypeScript is a Javascript superset designed for the development of robust applications, as it allows early detection of many of the most basic problems that can occur during the development of a website.

TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.

More information about TypeScript can be found at the following link [TypeScript](https://www.typescriptlang.org/)

## Description

This repository contains a collection of exercises to practice and understand basic and advanced TypeScript concepts. It aims to provide a hands-on approach to learning TypeScript through practical examples.

This project covers topics such as data types, functions, objects, classes, interfaces, namespaces, generics and decorators.

## Requirements

It is necessary to have installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/) or any other editor you like.

[![TypeScript](https://img.shields.io/badge/typescrypt-v5.2.2-blue)](https://www.typescriptlang.org/)

## Installing TypeScript

Install `TypeScript` using your favorite package manager:

```bash
npm install typescript --save-dev
```

```bash
yarn add typescript --dev
```

Globally Installing TypeScript

```bash
npm install -g typescript
```

```bash
yarn global add typescript
```

## Verifying Installation

After installation, you can verify TypeScript is correctly installed by checking its version

```bash
tsc --version
```

This command should print the installed TypeScript version number to the terminal.

## Technology Stack

[<img src="./assets/images/html5.svg" width="40" height="40" alt="HTML5" />](https://developer.mozilla.org/en-US/docs/Web/HTML)
[<img src="./assets/images/css3.svg" width="40" height="40" alt="CSS3" />](https://developer.mozilla.org/en-US/docs/Web/CSS)
[<img src="./assets/images/javascript.svg" width="40" height="40" alt="JavaScript" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[<img src="./assets/images/typescript.svg" width="40" height="40" alt="TypeScript" />](https://www.typescriptlang.org/docs/)

## Features

- Comprehensive coverage of different data types in TypeScript
- Detailed exploration of functions
- In-depth understanding of objects
- Techniques for debugging errors and mastering the TypeScript configuration file
- Principles of object-oriented programming
- Creating and using classes
- Creating and using interfaces
- Basic and advanced concepts of generics
- Understanding and implementing decorators

## Project Structure

```bash
├───📁 assets/
│   ├───📁 css/
│   ├───📁 fonts/
│   └───📁 images/
├───📁 dist/
├───📁 src/
│   ├───📁 classes/
│   ├───📁 data-types/
│   ├───📁 decorators/
│   ├───📁 ES6/
│   ├───📁 functions/
│   ├───📁 generics/
│   ├───📁 helpers/
│   ├───📁 interfaces/
│   ├───📁 namespaces/
│   └───📁 objects/
├───📄 app.ts
├───📄 index.html
├───📄 LICENSE
├───📄 README.md
└───📄 tsconfig.json
```

## Usage

1. Clone this repository on your local machine using the following command:

```bash
git clone https://github.com/daniel-pompa/typescript.git
```

2. Navigate to the repository directory:

```bash
cd typescript
```

3. Install the dependencies:

```bash
npm install
```

4. Open the index.html file in the browser of your choice and check the result in the browser console.

5. To see the result of the exercises change include it in the `tsconfig.json` file located in the root of the project.

Examples:

```json
"include": [
    "src/data-types"
]
```

```json
"include": [
    "src/functions"
]
```

```json
"include": [
    "src/objects"
]
```

```json
"include": [
    "src/ES6"
]
```

```json
"include": [
    "src/classes"
]
```

```json
"include": [
    "src/interfaces"
]
```

```json
"include": [
    "src/namespaces"
]
```

```json
"include": [
    "src/generics"
]
```

```json
"include": [
    "src/decorators"
]
```

## Additional Resources

Additional resources that may be useful for improving your TypeScript skills:

[TypeScript Documentation](https://www.typescriptlang.org/docs/)

[W3Schools - TypeScript Tutorial](https://www.w3schools.com/typescript/)

Have fun and enjoy learning TypeScript! 🌟

## Author

This repository was created by Daniel Pompa Pareja.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
