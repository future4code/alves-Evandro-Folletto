import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());

const fs = require('fs');

function read() {
  fs.readFile('./src/data.json', 'utf8', (err: string, data: string) => {
    if (err) {
      console.error(err);
      return;
    }
    arrayAfazeres = JSON.parse(data);
  });
}
read();

function write() {
  fs.writeFile('./src/data.json', JSON.stringify(arrayAfazeres), (err: string) => {
    if (err) {
      console.error(err);
    }
  });
}

// Exercício 1
app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong');
});

// Exercício 2
type tarefa = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean,
}

// Exercício 3
let arrayAfazeres: tarefa[] = [];

// Exercício 4
app.get("/todos", (req: Request, res: Response): void => {
  const { completed } = req.body

  const arrayAfazeresCompleted = arrayAfazeres.filter(afazer => {
    return afazer.completed === completed
  })

  res.send(arrayAfazeresCompleted);
})

// Exercício 5
app.post("/todos", (req: Request, res: Response) => {
  const { userId, id, title, completed } = req.body;
  const newTarefa = {
    userId,
    id,
    title,
    completed
  }

  const tarefa = arrayAfazeres.filter(afazer => {
    return afazer.id === id
  })

  if (tarefa.length !== 0) {
    res.status(404).send("ID do usuário e/ou ID da tarefa já existem!");
  } else {
    arrayAfazeres.push(newTarefa);
    write();
    res.send(arrayAfazeres);
  }
})

// Exercício 6
app.put("/todos", (req: Request, res: Response) => {
  const { userId, id, completed } = req.body;

  const tarefa = arrayAfazeres.filter(afazer => {
    return afazer.userId === userId && afazer.id === id
  })

  if (tarefa.length !== 0) {
    arrayAfazeres.forEach(afazer => {
      if (afazer.userId === userId && afazer.id === id) {
        afazer.completed = completed;
        write();
        res.send('Status da tarefa atualizado!');
      }
    })
  } else {
    res.status(404).send("Dados de userID e/ou id não estão corretos")
    return
  }
})

// Exercício 7
app.delete("/todos/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const tarefa = arrayAfazeres.find(afazer => afazer.id === id)

  if (tarefa !== undefined) {
    arrayAfazeres = arrayAfazeres.filter(afazer => {
      return afazer.id !== id
    })
    write();
    res.send('Tarefa deletada com sucesso!');
  } else {
    res.status(404).send("Usuario não encontrado");
    return
  }
})

// Exercício 8 / 10
app.get("/todos/:userId", (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const user = arrayAfazeres.find(afazer => afazer.userId === userId);

  if (user !== undefined) {
    let listaUser: tarefa[] = [];
    let listaOthers: tarefa[] = [];

    arrayAfazeres.forEach( afazer => {
      if(afazer.userId === userId) {
        listaUser.push(afazer);
      } else {
        listaOthers.push(afazer);
      }
    })
    res.send({
      todos: {
        selectUser: listaUser,
        others: listaOthers
      },
    });
  } else {
    res.status(404).send("Usuario não encontrado");
    return
  }
})

app.listen(3003, function () {
  console.log("Meu servidor está rodando na porta 3003...");
});