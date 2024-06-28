//* Data Types
// Any - any data type is allowed.

(() => {
  let child: any = 'Gael';
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
