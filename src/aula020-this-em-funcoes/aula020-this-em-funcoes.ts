export function funcao(this: Date, argumento: string): void {
    console.log(this);
    console.log(argumento);
}

// Call invoca a função e indica quem é o this dela, o restante são os parametros normais
funcao.call(new Date(), 'OI');
funcao.apply(new Date(), ['OI2']);
