// Função impura

const x1: number = 10;
const impureSum1 = (y: number): number => x1 + y

let z1: number = 10;
const impureSumInZ1 = (y: number): number => z1 += y

console.log(impureSumInZ1(4));
console.log(impureSumInZ1(5));

// Função pura

const pureSum1 = (x: number, y: number): number => x + y

console.log(pureSum1(5, 7));
console.log(pureSum1(5, 10));