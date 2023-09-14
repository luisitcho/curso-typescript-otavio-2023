// Tipo Object
const objetoA: {
    readonly chaveA: string;
    chaveB: string;
} = {
    chaveA: 'A',
    chaveB: 'B',
};

objetoA.chaveB = 'Outra string';

console.log(objetoA);
