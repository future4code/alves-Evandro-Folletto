import { ParOuImpar } from './exercicios/Exercicio_0';
import { ToUpper } from './exercicios/Exercicio_1';
import { ToArrayString } from './exercicios/Exercicio_2';

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

describe("Testando a função ToUpper", () => {
  test("A entrada 'bananinha' deve retornar BANANINHA", () => {
    const input = 'bananinha'
    const result = ToUpper(input)
    expect(result).toBe('BANANINHA')
  })
})

describe("Testando a função ToArrayString", () => {
  test("A entrada 'dev' deve retornar ['d', 'e', 'v']", () => {
    const input = 'dev'
    const result = ToArrayString(input)
    expect(result).toEqual(['d', 'e', 'v'])
  })
})