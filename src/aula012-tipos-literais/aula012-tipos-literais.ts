(function () {
    // Tipos Literais
    let x = 10; // eslint-disable-line
    x = 0b1010;

    const y = 10;
    let a: 100 = 100; // eslint-disable-line
    let b = 100 as const // eslint-disable-line

    const pessoaViva = {
        nome: 'Luis' as const,
        sobrenome: 'Henrique',
    };

    console.log(pessoaViva);

    function escolheCor(cor: 'vermelho' | 'azul' | 'preto'): string {
        return cor;
    }

    console.log(escolheCor('vermelho'));
})();
