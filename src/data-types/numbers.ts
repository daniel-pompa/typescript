//* Data Types
// Numbers - any whole or fractional number.

(() => {
  const accountBalance: number = 8000;
  const paymentAmount: number = 50;
  const hasCreditCard: boolean = true;

  console.log({ accountBalance });
  console.log({ paymentAmount });
  console.log({ hasCreditCard });

  if (accountBalance >= paymentAmount && hasCreditCard) {
    console.log('Puedes pagar con tu saldo o con tu tarjeta de crédito');
  } else if (accountBalance >= paymentAmount) {
    console.log('Puedes pagar con tu saldo');
  } else if (hasCreditCard) {
    console.log('Puedes pagar con tu tarjeta de crédito');
  } else {
    console.log('No tienes saldo suficiente');
  }
})();
