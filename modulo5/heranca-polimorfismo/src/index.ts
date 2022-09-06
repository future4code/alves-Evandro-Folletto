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
	){
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
}

const user1 = new User("001", "pedro@gmail.com", "Pedro", "12345");
console.log(user1.getId());
console.log(user1.getEmail());
console.log(user1.getName());

// a) 
// Não serua possível, pois a variável "password" é privada e não existe nenhuma função getter para ela.

// b)
// 1