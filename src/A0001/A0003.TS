function semRetorno(...args: string[]): void{
  console.log(args.join( ''));
}

const pessoa = {
  nome: 'Elisson',
  sobrenome: 'Saldanha',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  }
}

semRetorno('Elisson', 'Saldanha')
pessoa.exibirNome();

export {pessoa};
