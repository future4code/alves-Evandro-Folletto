function devolveMensagem(nome: string, dataNascimento: string): string {
  const dataSeparada = dataNascimento.split('/');
  return `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}`
}

console.log(devolveMensagem('Pedro', '20/05/1980'));