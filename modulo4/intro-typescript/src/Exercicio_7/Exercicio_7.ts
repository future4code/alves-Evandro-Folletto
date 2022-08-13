function converteDNA_RNA(dna: string): string {
  dna = dna.toUpperCase().replace(/A/g, 'U'); // forma alternativa para o replaceAll
  dna = dna.toUpperCase().replace(/T/g, 'A');
  dna = dna.toUpperCase().replace(/C/g, 'K');
  dna = dna.toUpperCase().replace(/G/g, 'C');
  dna = dna.toUpperCase().replace(/K/g, 'G');
  return dna;
}

console.log(converteDNA_RNA('ATTGCTGCGCATTAACGACGCGTA'))