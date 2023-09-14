// Tipo Union Types
function addOrConcat(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a} ${b}`;
}

console.log(addOrConcat(1, 5));
console.log(addOrConcat('OI', 'GENTE'));
console.log(addOrConcat(10, 35));
console.log(addOrConcat('Peppa', 'Pig'));
