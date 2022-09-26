import { ParOuImpar } from './exercicios/Exercicio_0';
import { ToUpper } from './exercicios/Exercicio_1';
import { ToArrayString } from './exercicios/Exercicio_2';
import { ToNumber } from './exercicios/Exercicio_3';
import { Length } from './exercicios/Exercicio_4';
import { Round } from './exercicios/Exercicio_5';

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

describe("Testando a função ToNumber", () => {
  test("A entrada '50' deve retornar 50", () => {
    const input = '50'
    const result = ToNumber(input)
    expect(result).toBe(50)
  })
})

describe("Testando a função Length", () => {
  test("A entrada 'teste' deve retornar 5", () => {
    const input = 'teste'
    const result = Length(input)
    expect(result).toBe(5)
  })
})

describe("Testando a função Round", () => {
  test("A execução da função deve retornar um valor entre 1 e 10", () => {
    const result = Round()
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })
})