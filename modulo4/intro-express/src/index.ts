import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get('/', (req: Request, res: Response) => {
  res.send("Meu primeiro endpoint");
})

// Exercício 2
type usuario = {
  id: number,
  name: string,
  phone: number,
  email: string,
  website: string
}

// Exercício 3
let users: usuario[] = [
  {
    id: 1,
    name: 'João',
    phone: 111111111,
    email: 'joao@gmail.com',
    website: 'www.joao.com.br'
  },
  {
    id: 2,
    name: 'Pedro',
    phone: 222222222,
    email: 'pedro@gmail.com',
    website: 'www.pedro.com.br'
  },
  {
    id: 3,
    name: 'Lucas',
    phone: 333333333,
    email: 'lucas@gmail.com',
    website: 'www.lucas.com.br'
  },
  {
    id: 4,
    name: 'Maria',
    phone: 444444444,
    email: 'maria@gmail.com',
    website: 'www.maria.com.br'
  },
  {
    id: 5,
    name: 'Ana',
    phone: 555555555,
    email: 'ana@gmail.com',
    website: 'www.ana.com.br'
  }
]

// Exercício 4
app.get('/users', (req: Request, res: Response) => {
  const usuarios = users.map( user => {
    return user
  })
  res.send(usuarios)
})

// Exercício 5
type post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

// Exercício 6
// acredito ser melhor fazer em um array separado por organização do código.

let usersPosts:post[] = [
  {
    userId: 1,    
    id: 1,
    title: 'momento máximo',
    body: 'momento máximo de viga biapoiada com carregamento uniforme é no centro do vão',
  },
  {
    userId: 1,
    id: 2,
    title: 'momento mínimo',
    body: 'momento mínimo de viga biapoiada com carregamento uniforme é sobre o apoio',
  },
  {
    userId: 2,
    id: 3,
    title: 'flecha máxima',
    body: 'flecha máxima de viga biapoiada com carregamento uniforme é no centro do vão',
  },
  {
    userId: 3,
    id: 4,
    title: 'flecha mínima',
    body: 'flecha mínimo de viga biapoiada com carregamento uniforme é sobre o apoio e com valor zero',
  },
  {
    userId: 4,
    id: 5,
    title: 'viga em balanço',
    body: 'vigas em balanço estão submetidas apenas à momento fletor negativo',
  },
  {
    userId: 4,
    id: 6,
    title: 'viga em balanço momento máximo',
    body: 'o momento máximo em vigas em balanço é sobre seu apoio',
  },
  {
    userId: 4,
    id: 7,
    title: 'posição das armaduras',
    body: 'em locais com momento positivo, as armaduras são colocadas na parte inferior',
  },
  {
    userId: 5,
    id: 8,
    title: 'armaduras para momento negativo',
    body: 'para combaterr momento negativo, deve-se colocar as armaduras em cima',
  },
]


// Exercício 7
app.get('/posts', (req: Request, res: Response) => {
  const usuariosPosts = usersPosts.map( post => {
    return post
  })
  res.send(usuariosPosts)
})

// Exercício 8
// app.get("/posts", (req: Request, res: Response) => {
//   const usuarioPosts = usersPosts.filter( post => {
//     return post.userId === Number(req.query.userId)
//   })
//   res.send(usuarioPosts);
// })

// Exercício 9
app.delete("/posts/:id", (req: Request, res: Response) => {
  usersPosts = usersPosts.filter( post => {
    return post.id !== Number(req.params.id)
  })
  res.send(usersPosts);
})

// Exercício 10
app.delete("/user/:id", (req: Request, res: Response) => {
  users = users.filter( user => {
    return user.id !== Number(req.params.id)
  })
  res.send(users);
})

app.listen(3003, () => {
  console.log("Servidor executando na porta 3003...");
});