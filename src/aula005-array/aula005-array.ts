// Tipo Array
export function multiArgs(...args: Array<number>): number {
    return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatStrings(...args: string[]): string {
    return args.reduce((acc, valor) => acc + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

const result = multiArgs(2, 5);
const resultString = concatStrings('Peppa', 'Pig');
const resultUpper = toUpperCase('to', 'no', 'b.o');

console.log(result);
console.log(resultString);
console.log(resultUpper);
