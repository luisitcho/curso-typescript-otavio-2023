export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _name: string) {}

    get nome(): string {
        return this._name;
    }

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta;
    }

    escrever(): void {
        if (this._ferramenta === null) {
            console.log('Não posso escrever sem ferramenta');
            return;
        }

        this._ferramenta.escrever();
    }
}

export abstract class Ferramenta {
    constructor(private _name: string) {}

    abstract escrever(): void;

    get nome(): string {
        return this._name;
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo`);
    }
}

export class Maquina extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando`);
    }
}

const escritor = new Escritor('Luis');
const caneta = new Caneta('Big');
const maquina = new Maquina('Lavar');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquina.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquina;
escritor.ferramenta = null;
escritor.escrever();
