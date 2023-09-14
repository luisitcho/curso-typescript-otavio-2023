// Funções como Tipos
type MapStringsFN = (item: string) => string;

export function mapString(array: string[], callbackFN: MapStringsFN): string[] {
    const newArray: string[] = [];

    array.forEach(function (element, index) {
        newArray.push(callbackFN(array[index]));
    });

    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMap = mapString(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMap);
