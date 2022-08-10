function inverteString(text: string): string {
  let arrayText: string[] = text.split('');
  arrayText = arrayText.reverse();
  return arrayText.join("");
}

console.log(inverteString('eita'));