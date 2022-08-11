enum acdc {
  AC = 'AC',
  DC = 'DC',
}

function idadeHistorica(ano: number, epoca: acdc): string {
  if (epoca === 'AC') {
    if (ano > 4000) {
      return 'Pré-história'
    } else {
      return 'Idade Antiga'
    }
  } else {
    if (ano < 476) {
      return 'Idade Antiga'
    }
    if (ano >= 476 && ano < 1453) {
      return 'Idade Média'
    }
    if (ano >= 1453 && ano < 1789) {
      return 'Idade Moderna'
    }
    if (ano >= 1789 && ano <= 2022) {
      return 'Idade Moderna'
    }
    if (ano > 2022) {
      return 'O ano deve ser menor ou igual ao ano atual'
    }
  }
}

console.log(idadeHistorica(1400, acdc.AC));