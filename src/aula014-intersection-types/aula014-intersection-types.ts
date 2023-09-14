// Intersection Types
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; //AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type intersecao = AB & AC & AD;

const pessoa: Pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 23,
};

console.log(pessoa);

export { pessoa };
