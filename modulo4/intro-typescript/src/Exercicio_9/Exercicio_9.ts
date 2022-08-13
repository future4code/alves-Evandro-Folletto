function verificaInscricao(idade: number, ensMed: boolean, horasDisponiveis: number, periodo: string): boolean {
  const maiorIdade = idade >= 18;
  const ensinoMedioCompleto = ensMed;
  const dispCargaHoraria = periodo === 'integral' ? horasDisponiveis >= 40 : horasDisponiveis >= 20
  
  return maiorIdade && ensinoMedioCompleto && dispCargaHoraria
}

console.log(verificaInscricao(32, true, 39, 'noturno'));