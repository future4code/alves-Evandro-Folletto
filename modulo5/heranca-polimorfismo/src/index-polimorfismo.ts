// -------------------------------
// EXERCÍCIO 1
// -------------------------------
interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const obj: Client = {
  name: "Ana",
  registrationNumber: 1,
  consumedEnergy: 67,
  calculateBill: () => {
    return 2
  }
}
console.log('---------- Exercício 1 ----------')
console.log('Nome:', obj.name);
console.log('Número de cadastro:', obj.registrationNumber);
console.log('Consumo:', obj.consumedEnergy);
console.log('Valor:', obj.calculateBill());

// a)
// Foi possível imprimir as 4 propriedades: name, registrationNumber, consumedEnergy e calculateBill.

// -------------------------------
// EXERCÍCIO 2
// -------------------------------
abstract class Place {
  constructor(protected cep: string) { }

  public getCep(): string {
    return this.cep;
  }
}
// a)
// const teste = new Place('11111-111');
// Erro: Cannot create an instance of an abstract class.

// b)
// Seria necessário estender essa classe para uma filha e instanciar a filha.

// -------------------------------
// EXERCÍCIO 3
// -------------------------------
class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}

class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local 

    cep: string
  ) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }
}
console.log('---------- Exercício 3 ----------')
const residencia1 = new Residence(4, '11111-111');
console.log('CEP residência:', residencia1.getCep());

const comercio1 = new Commerce(2, '22222-222');
console.log('CEP comércio:', comercio1.getCep());

const industria1 = new Industry(12, '33333-333');
console.log('CEP indústria:', industria1.getCep());

console.log('residentsQuantity:', residencia1.getResidentsQuantity());
console.log('floorsQuantity:', comercio1.getFloorsQuantity());
console.log('machinesQuantity:', industria1.getMachinesQuantity());

// -------------------------------
// EXERCÍCIO 4
// -------------------------------
class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,

    protected residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf
  }

  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75
  }
}
console.log('---------- Exercício 4 ----------')
const clienteResidencial1 = new ResidentialClient('Marcos', 2, 56, '111111111-11', 3, '00000-000');
console.log(clienteResidencial1);
console.log('Valor da conta de luz:', clienteResidencial1.calculateBill());
// Propriedades: cpf, name, registrationNumber, consumedEnergy, residentsQuantity, cep
// Métodos: getCpf(), getResidentsQuantity(), calculateBill()

// -------------------------------
// EXERCÍCIO 5
// -------------------------------
class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    
    protected floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public getCnpj(): string {
    return this.cnpj
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
}
console.log('---------- Exercício 5 ----------')
const clienteComercial1 = new CommercialClient('Loja de roupas', 5, 678, '222222222-22', 2, '77777-777');
console.log(clienteComercial1);
console.log('Valor da conta de luz:', clienteComercial1.calculateBill());
// a)
// Semelhanças: 
  // recebem a mesma quantidade de entradas.
  // a estrutura de um modo geral é muito parecida.

// b)
// Diferenças: 
  // neste exercício é recebido a variável cnpj. 
  // O valor unitário da luz é menor. 
  // Recebe a variável floorsQuantity.

// -------------------------------
// EXERCÍCIO 6
// -------------------------------
class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,

    protected machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getCnpj(): string {
    return this.cnpj
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }

  public calculateBill(): number {
    return this.machinesQuantity * 100 + this.consumedEnergy * 0.45
  }
}
// a)
// da classe indústria, pois é nessa classe que estão os dados de indústria.

// b)
// a interface de cliente, pois é nessa interfacec que estão os dados de cliente.

// c)
// pois não é necessário atualizar / editar nenhuma variável.