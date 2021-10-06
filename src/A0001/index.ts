// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'elisson';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

// Arrays
let arrayOfNumber: Array<number> = [1, 2, 3];
let arrayOfNumberOther: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome:'elisson',
  idade: 12,
};

//-> está dizendo que essa propriedade é opcional

console.log(pessoa.nome);

// Functions
function soma( x: number, y: number): number {
  return x+y;
}

const result = soma(2, 2);

// outra maneira de colocar tipos para functions

const soma2: (x: number, y: number) => number = (x, y) => x + y;
