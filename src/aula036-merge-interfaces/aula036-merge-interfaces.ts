// Declaration merging
interface Pessoa {
    nome: string;
}

interface Pessoa {
    sobrenome: string;
}

interface Pessoa {
    readonly enderecos: readonly string[];
}

interface Pessoa {
    idade?: number;
}

export const pessoa: Pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    enderecos: ['Rua Nova', 'Av. Brasil'],
};

console.log(pessoa);
