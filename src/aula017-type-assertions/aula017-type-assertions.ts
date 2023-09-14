// Type assertions

/* RECOMENDADO */

// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// Type assertions
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'red';

// HTMLElement
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'Teste';

/* NÃO RECOMENDADO */

// Type assertions
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.backgroundColor = 'red';
