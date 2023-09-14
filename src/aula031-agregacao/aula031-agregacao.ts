export class CarrinhoCompras {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const produto = new Produto('Peixe', 20);
const carrinhoCompras = new CarrinhoCompras();

carrinhoCompras.inserirProdutos(produto, produto, produto, produto);
console.log(carrinhoCompras.valorTotal());
console.log(carrinhoCompras.quantidadeProdutos());
