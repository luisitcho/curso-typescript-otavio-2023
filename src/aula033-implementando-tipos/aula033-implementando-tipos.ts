// export abstract class TipoPessoa {
//     protected abstract nome: string;
//     protected abstract sobrenome: string;
//     protected abstract nomeCompleto(): string;
// }

// export class Pessoa extends TipoPessoa {
//     constructor(public nome: string, public sobrenome: string) {
//         super();
//     }

//     nomeCompleto(): string {
//         return `${this.nome} ${this.sobrenome}`;
//     }
// }

// JEITO 1
// type TipoPessoa = {
//     nome: string;
//     sobrenome: string;
//     nomeCompleto: () => string;
// };

// export class Pessoa implements TipoPessoa {
//     constructor(public nome: string, public sobrenome: string) {}

//     nomeCompleto(): string {
//         return `${this.nome} ${this.sobrenome}`;
//     }
// }

// JEITO 2
type TipoNome = {
    nome: string;
};

type TipoSobrenome = {
    sobrenome: string;
};

type TipoNomeCompleto = {
    nomeCompleto: () => string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Luis', 'Henrique');
console.log(pessoa.nomeCompleto());
