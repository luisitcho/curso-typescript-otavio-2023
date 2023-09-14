// Tipo Void
function semRetorno(...args: string[]): void {
    console.log(args.join(', '));
}

const pessoa = {
    nome: 'TesteNome',
    sobrenome: 'TesteSobrenome',

    exibirNome(): void {
        console.log(`${this.nome} ${this.sobrenome}`);
    },
};

semRetorno('Peppa', 'Pig');
pessoa.exibirNome();

export { pessoa };
