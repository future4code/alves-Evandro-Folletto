type pessoa2 = {
  nome: string,
  email: string,
  role: string
}

const arrayPessoas2: pessoa2[] =  [
	{nome: "Rogério", email: "roger@email.com", role: "user"},
	{nome: "Ademir", email: "ademir@email.com", role: "admin"},
	{nome: "Aline", email: "aline@email.com", role: "user"},
	{nome: "Jéssica", email: "jessica@email.com", role: "user"},  
	{nome: "Adilson", email: "adilson@email.com", role: "user"},  
	{nome: "Carina", email: "carina@email.com", role: "admin"}      
] 

function retornaSelecao2(pessoas: pessoa2[]): string[] {
  const listEmails: string[] = [];

  pessoas.forEach( pessoa => {
    if(pessoa.role === 'admin'){
      listEmails.push(pessoa.email);
    }
  })

  return listEmails
}

console.log(retornaSelecao2(arrayPessoas2));