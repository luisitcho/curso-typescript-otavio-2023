// Tipo tuple
const dadosCliente1: readonly [number, string] = [2, 'Teste'];
const dadosCliente2: [number, string, string] = [70, 'Miau', 'Gato'];
const dadosCliente3: [number, string, string?] = [25, 'Testando'];
const dadosCliente4: [number, string, ...string[]] = [
    25,
    'Testando',
    '1',
    '2',
    '3',
    '4',
];

// dadosCliente1[0] = 30;
// dadosCliente1[1] = 'Peppa';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly Arrray
const array1: readonly string[] = ['Peixe', 'Frito'];
const array2: ReadonlyArray<string> = ['Vaca', 'Cozida'];

console.log(array1);
console.log(array2);
