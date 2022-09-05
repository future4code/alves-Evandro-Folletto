// ---------------------------
// EXERCÍCIO 1
// ---------------------------
// a)
  // Construtor serve para iniciar as variáveis. Chamamos o mesmo ao instanciar uma classe. No exemplo dado: new UserAccount()

// b)
// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
}

const novaConta = new UserAccount('111.111.111-11', 'Pedro', 25);
// O Código gera um erro pois falto o tipo Transaction. Copiando o tipo do exercício 2, a mensagem é impressa 1 vez no terminal.

// c)
// Não

// ---------------------------
// EXERCÍCIO 2
// ---------------------------
class Transaction {
  private description: string;
  private value: number;
  private date: string;
 
  constructor(description:string, value:number, date:string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription(): string {
    return this.description
  }

  public getValue(): number {
    return this.value
  }

  public getDate(): string {
    return this.date
  }
}

const transacao1 = new Transaction('depósito', 20, '05/08/2022');