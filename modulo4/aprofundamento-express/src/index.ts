import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data';
const app = express();
app.use(express.json());
app.use(cors());

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
let arrayAfazeres = [
  {
    "userId": 1,
    "id": 1,
    "title": 'tomar café',
    "completed": true,
  },
  {
    "userId": 1,
    "id": 2,
    "title": 'se arrumar',
    "completed": true,
  },
  {
    "userId": 1,
    "id": 3,
    "title": 'ir para o trabalho',
    "completed": false,
  },
  {
    "userId": 2,
    "id": 4,
    "title": 'levar o carro arrumar',
    "completed": true,
  },
  {
    "userId": 2,
    "id": 5,
    "title": 'cortar o cabelo',
    "completed": false,
  },
  {
    "userId": 3,
    "id": 6,
    "title": 'lavar a louça',
    "completed": true,
  },
  {
    "userId": 3,
    "id": 7,
    "title": 'limpar a casa',
    "completed": true,
  },
  {
    "userId": 4,
    "id": 8,
    "title": 'ajudar na tarefa de casa do filho',
    "completed": false,
  },
  {
    "userId": 5,
    "id": 9,
    "title": 'jogar futebol com os amigos',
    "completed": false,
  },
  {
    "userId": 5,
    "id": 10,
    "title": 'tomar banho',
    "completed": false,
  },
]

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
    arrayAfazeres.push(newTarefa)
    res.send('Lista de tarefas atualizada!');
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

// app.get('/test/hello', (req: Request, res: Response) => {
//     res.send(`Olá, mundo!`)
// })
// app.get('/test/:number', (req: Request, res: Response) => {
//     res.send(
//         `Seu número da sorte é ${Number(req.params.number) + 3}!
//     `)
// })

// app.get("/playlists", (req: Request, res: Response) => {
//     const playlists = users.map((user) => {
//         return user.playlists
//     }).flat()
//     res.send(playlists)
// })
// app.get("/tracks", (req: Request, res: Response) => {
//     const playlists = users.map((user) => {
//         return user.playlists
//     }).flat()
//     const tracks = playlists.map((playlist) => {
//         return playlist.tracks
//     }).flat()
//     res.send(tracks)
// })
// app.delete("/playlist/:playlistId", (req: Request, res: Response) => {
//     const userId = req.headers.user
//     const playlistId = req.params.playlistId
//     // console.log("userId", userId)
//     const user = users.find((user) => {
//         return user.id === userId
//     })
//     if (user === undefined) {
//         res.status(404).send("Usuario não encontrado")
//         return
//     }
//     user.playlists = user?.playlists.filter((playlist) => {
//         return playlist.id !== playlistId
//     })
//     res.end()
// })
// app.delete("/track/:trackId", (req: Request, res: Response) => {
//     const userId = req.headers.user
//     const trackId = req.params.trackId
//     const user = users.find((user) => user.id === userId)
//     if (user === undefined) {
//         res.status(404).send("Usuario não foi encontrado")
//         return
//     }
//     user.playlists = user.playlists.map((playlist) => {
//         // const newPlaylist =
//         return {
//             id: playlist.id,
//             name: playlist.name,
//             tracks: playlist.tracks.filter((track) => {
//                 return track.id !== trackId
//             })
//         }
//     })
//     res.end()
// })
// app.get("/playlists/search", (req: Request, res: Response): void => {
//     const name = req.query.name as string

//     const allPlaylists = users.map((user) => {
//         return user.playlists
//     }).flat()

//     const result = allPlaylists.filter((playlist) => {
//         return name ? playlist.name.includes(name) : true;
//     })
//     res.send(result)
// })
// app.post("/playlists", (req: Request, res: Response) => {
//     const { idUser, name } = req.body
//     const user = users.find((user) => user.id === idUser)

//     if (user) {
//         user.playlists.push({
//             id: Date.now().toString(),
//             name: name,
//             tracks: []
//         })

//         res.send("Playlist foi criada")
//     } else {
//         res.status(400).send("Usuario não encontrado")
//     }

// })

// app.post("/playlists/:playlistId/tracks", (req: Request, res: Response) => {

//     const { name, artist, url } = req.body

//     const playlistId = req.params.playlistId
//     const userId = req.headers.authorization

//     const user = users.find((user) => user.id === userId)

//     if (user) {
//         const playlist = user.playlists.find((playlist) => {
//             return playlist.id === playlistId
//         })
//         if(playlist){
//             playlist.tracks.push({
//                 id: Date.now().toString(),
//                 name,
//                 artist,
//                 url
//             })
//             res.send("Track foi criada")
//         }else{
//             res.status(404).send("Playlist não encontrada")
//         }
//     } else {
//         res.status(404).send("Usuario não encontrado")
//     }

// })

app.listen(3003, function () {
  console.log("Meu servidor está rodando na porta 3003...");
});