interface TipoNome {
    nome: string;
}

interface TipoSobrenome {
    sobrenome: string;
}

interface TipoNomeCompleto {
    nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

export const pessoaObj: TipoPessoa2 = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
};

const pessoa = new Pessoa('Luis', 'Henrique');
console.log(pessoa.nomeCompleto());

console.log(pessoaObj.nomeCompleto());
