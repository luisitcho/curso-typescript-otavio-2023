/* eslint-disable */
let nome: string = "Luis";

// Arrays
let arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let arrayStrings: string[] = ['a', 'b', 'c', 'd', 'e'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'Luis',
    idade: 23
}

// Funções
function soma(x: number, y: number) {
    return x + y;
}

// let result = soma(2, 1);
let result2: (x: number, y: number) => number = (x, y) => x + y;