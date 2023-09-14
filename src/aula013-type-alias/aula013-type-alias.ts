// Type alias
type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMIK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMIK;

const pessoa: Pessoa = {
    idade: 23,
    nome: 'Luis',
    salario: 200_000,
};

export function setCor(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor };
}

console.log(setCor(pessoa, 'Preto'));
console.log(pessoa);
