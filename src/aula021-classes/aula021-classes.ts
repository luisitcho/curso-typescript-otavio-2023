export class Empresa {
    // Inicialização parcial
    public readonly nome: string; // Public não é necessário
    // private readonly colaboradores: readonly Colaborador[] = []; array imutavel dessa forma
    private readonly colaboradores: Colaborador[] = []; //Classes também servem como tipos
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    addColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaborador(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('Peppa', '11.171.171/1710-71');
const colaborador1 = new Colaborador('Peppa', 'Pig');
const colaborador2 = new Colaborador('Mingau', 'Ervilha');
const colaborador3 = new Colaborador('Tin', 'Tim');

empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);

console.log(empresa1);

empresa1.mostrarColaborador();
