export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string,
    ) {
        super(nome, sobrenome, idade, cpf);
    }

    getNomeCompleto(): string {
        console.log(`Aluno: ${this.nome} ${this.sobrenome}`);
        return super.getNomeCompleto();
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return `Cliente: ${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('IAE', 'NÓIA', 19, '0000');
const aluno = new Aluno('OI', 'TIU', 20, '1111', 'Sala1');
const cliente = new Cliente('XAU', 'Tia', 21, '2222');

// console.log(pessoa);
console.log(aluno);
// console.log(cliente);

// console.log(aluno.getNomeCompleto());
// console.log(cliente.getNomeCompleto());
