import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 2
enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

// Exercício 1
app.get('/users', (req: Request, res: Response) => {
  res.send(users);
})
// 1.a) 
// Deve-se utilizar o método GET
// 1.b)
// Indicaria '/users'

// Exercício 2
app.get("/user/:type", (req: Request, res: Response) => {
  const userSearch = req.params.type as string;
  try {
    if(userSearch !== UserType.ADMIN && userSearch !== UserType.NORMAL){
      res.statusCode = 401;
      throw new Error('A variável type precisa ser Admin ou Normal!');
    }
    const listPrint = users.filter( user => {
      return user.type === userSearch 
    })
    res.send(listPrint);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message })
  }
})
// 2.a) 
// O parâmetro foi repassado por path params
// 2.b)
// Criar um enum para ter apenas categorias pré-definidas para o type

// Exercício 3
app.get("/user", (req: Request, res: Response) => {
  const nameUserSearch = req.query.name as string;
  try {
    if(!nameUserSearch){
      res.statusCode = 401;
      throw new Error('É necessário atribuir algum valor para a busca!');
    }
    const listPrint = users.filter( user => {
      return user.name === nameUserSearch
    })
    if(!listPrint.length){
      res.statusCode = 401;
      throw new Error('O usuário digitado não foi encontrado!');
    }    
    res.send(listPrint);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message })
  }
})
// 3.a) 
// O parâmetro foi repassado por query params, pois é uma busca por um texto
// 3.b)
// Criar um enum para ter apenas categorias pré-definidas para o type

// Exercício 4
app.put("/user", (req: Request, res: Response) => {
  const { id, name, email, type, age } = req.body;

  try {
    if(!id || !name || !email || !type || !age){
      res.statusCode = 401;
      throw new Error('Algum dado não foi fornecido!');
    }
    if(typeof(id) !== 'number'){
      res.statusCode = 401;
      throw new Error('O ID deve ser um número!');
    }
    if(typeof(name) !== 'string'){
      res.statusCode = 401;
      throw new Error('O Nome deve ser uma string!');
    }
    if(typeof(email) !== 'string'){
      res.statusCode = 401;
      throw new Error('O Email deve ser uma string!');
    }
    if(type !== 'ADMIN' && type !== 'NORMAL'){
      res.statusCode = 401;
      throw new Error('O tipo deve ser ADMIN OU NORMAL!');
    }
    if(typeof(age) !== 'number'){
      res.statusCode = 401;
      throw new Error('A idade deve ser um número!');
    }

    const newUser:User = {id,
      name,
      email,
      type,
      age
    }
    users.push(newUser)
    res.send(users);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message })
  }
})
// 4.a)
// Nada. A criação funcionou normalmente
// 4.b)
// Não. Pois o POST é utilizado para criar novo usuário e o PUT seria para alguma característica específica ou editar algo.

app.listen(3003, () => {
  console.log('Servidor rodadando na porta 3003...')
})
