import { ParOuImpar } from './Exercicio_0';

describe("Testando a função parOuImpar", () => {
  test("A entrada 10 deve retornar true", () => {
    const input = 10
    const result = ParOuImpar(input)
    expect(result).toBe(true)
  })
  
  test("A entrada 5 deve retornar false", () => {
    const input = 5
    const result = ParOuImpar(input)
    expect(result).toBe(false)
  })
})