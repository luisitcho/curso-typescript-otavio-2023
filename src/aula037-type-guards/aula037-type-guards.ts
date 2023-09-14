/* eslint-disable @typescript-eslint/prefer-as-const */
export function add(a: unknown, b: unknown): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a} junto com ${b}`;
}

console.log(add(1, 2));
console.log(add('1', '2'));

// type Pessoa = { nome: string };
// type Animal = { cor: string };
type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    tipo: 'pessoa' = 'pessoa';
    constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
    // if ('nome' in obj) console.log(obj.nome);
    // if (obj instanceof Aluno) console.log(obj.nome);

    switch (obj.tipo) {
        case 'pessoa':
            return console.log(obj.nome);
        case 'animal':
            return console.log(obj.cor);
    }
}

mostraNome(new Aluno('João'));
mostraNome({ tipo: 'animal', cor: 'rosa' });
