// Object livre para receber qualquer proriedade
// const objectA: Record<string, unknown> = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor b'
// }
// objectA.chavec = 'chave C';


const objetoA: {
   readonly chaveA: string; // Essa propriedade não pode ser alterada
  chaveB: string; // precisa ter uma propriedade tipo string
  chaveC?: string; // pode ou n]ao ter uma propriedade tipo string
  [key: string]: unknown; // podemos criar uma propriedade sem restrição
} = {
  chaveA:'Valor A',
  chaveB:'Valor B'
}
