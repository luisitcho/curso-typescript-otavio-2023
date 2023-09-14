export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected _cpf: string,
    ) {
        this.cpf = _cpf; //Chamando o setter duas vezes
    }

    set cpf(valor: string) {
        this._cpf = valor;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, ''); //Deixando apenas numeros
    }
}

const pessoa = new Pessoa('IAE', 'NÓIA', 19, '11.171.171/1710-71');
pessoa.cpf = '11.171.171/1710-77';
console.log(pessoa.cpf);
