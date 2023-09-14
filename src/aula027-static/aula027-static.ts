export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = '000.000.000-00';

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) {}

    metodoNormal(): void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }

    //Instanciando uma classe pelo método estático
    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(
            nome,
            sobrenome,
            Pessoa.idadePadrao,
            Pessoa.cpfPadrao,
        );
    }
}

const pessoa = new Pessoa('IAE', 'NÓIA', 19, '11.171.171/1710-71');
const pessoa2 = Pessoa.criaPessoa('Teste', 'Teste sobrenome');
console.log(pessoa);
console.log(pessoa2);
pessoa2.metodoNormal();
