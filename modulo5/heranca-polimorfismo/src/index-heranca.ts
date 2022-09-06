// -------------------------------
// EXERCÍCIO 1
// -------------------------------
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  // exercício 4
  // public introduceYourself(): void {
  //   return console.log('Olá, bom dia!');
  // }

  // exercício 5
  public introduceYourself(): void {
    return console.log(`Olá, sou ${this.name}. Bom dia!`);
  }
}

console.log('---------- Exercício 1 ----------');
const user1 = new User("001", "pedro@gmail.com", "Pedro", "12345");
console.log('ID:', user1.getId());
console.log('Nome:', user1.getName());
console.log('E-mail:', user1.getEmail());

// a) 
// Não seria possível, pois a variável "password" é privada e não existe nenhuma função getter para ela.

// b)
// 1

// -------------------------------
// EXERCÍCIO 2
// -------------------------------
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customoer1 = new Customer("001", "joao@gmail.com", "João", "11111", "1111222233334444");

// a)
// 1

// b)
// 2. Uma referente ao exercício 1 e outra dentro da classe Customer, éonde é chamado o construtor da classe pai através da palavra "super".

// -------------------------------
// EXERCÍCIO 3
// -------------------------------
console.log('---------- Exercício 3 ----------');
console.log('Id:', customoer1.getId());
console.log('Nome:', customoer1.getName());
console.log('E-mail:', customoer1.getEmail());
console.log('Cartão de crédito:', customoer1.getCreditCard());
console.log('Valor total da compra:', customoer1.purchaseTotal);

// a)
// Não, pois o atributo herdado possui tipo "private"

// -------------------------------
// EXERCÍCIO 4 e 5
// -------------------------------
console.log('---------- Exercício 4 e 5 ----------');
customoer1.introduceYourself();