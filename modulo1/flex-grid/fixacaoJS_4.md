```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let qtd = 0;
  for (i=0 ; i<arrayDeNumeros.length ; i++){
    if (arrayDeNumeros[i] === numeroEscolhido) qtd++
  }
  if (qtd > 0){
    return `O número ${numeroEscolhido} aparece ${qtd}x`
  } else {
    return `Número não encontrado`
  }
}
```