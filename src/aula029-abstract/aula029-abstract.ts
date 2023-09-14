export abstract class Personagem {
    protected abstract emoji: string;

    constructor(protected nome: string, protected ataque: number, protected vida: number) {}

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida`);
    }

    abstract bordao(): void;
}

export class Guerreiro extends Personagem {
    protected emoji = ':/';

    bordao(): void {
        console.log(`${this.emoji} Guerreiro atacando agora`);
    }
}
export class Monstro extends Personagem {
    protected emoji = '^^';

    bordao(): void {
        console.log(`${this.emoji} Monstro atacando agora`);
    }
}

const guerreiro = new Guerreiro('Guerreiro', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
guerreiro.atacar(monstro);

monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
