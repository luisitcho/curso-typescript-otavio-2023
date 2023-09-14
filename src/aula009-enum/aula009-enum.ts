// Tipo Enum
enum Cores {
    VERMELHO, // 0
    AZUL, // 1
    AMARELO, // 2
    PRETO = 10,
    ROSA = 'ROSA',
}

enum Cores {
    LILAS = 'LILAS',
}

function escolheCor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolheCor(Cores.ROSA);
