import express, { Request, Response } from "express"
import cors from "cors"
import { products } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

// Exercício 1
app.get('/test', (req: Request, res: Response) => {
  res.send('O servidor está funcionando');
})

// Exercício 3 / 7
app.put("/create", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    if(typeof(name) !== 'string'){
      res.statusCode = 401;
      throw new Error('A variável name precisa ser uma string!');
    }
    if(typeof(price) !== 'number'){
      res.statusCode = 401;
      throw new Error('A variável price precisa ser um número!');
    }
    if(typeof(price) === 'number' && price <= 0){
      res.statusCode = 401;
      throw new Error('A variável price precisa ser um número maior que zero!');
    }

    products.push({
      id: Date.now(),
      name: name,
      price: price
    });
    res.send(products);

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})

// Exercício 4 / 10
app.get("/products", (req: Request, res: Response) => {
  const search = req.query.search as string;

  if(search === undefined){
    res.send(products);
  } else {
    const newListProducts = products.filter( (product:any) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    })
    res.send(newListProducts);
  }
})

// Exercício 5 / 8 / 11
app.put("/editprice", (req: Request, res: Response) => {
  try {
    const { id, name, price } = req.body;

    if(!price && !name){
      res.statusCode = 401;
      throw new Error('Nenhum dos dois valores para edição foi repassado!');
    }
    if(price && typeof(price) !== 'number'){
      res.statusCode = 401;
      throw new Error('A variável price precisa ser um número!');
    }
    if(price && typeof(price) === 'number' && price <= 0){
      res.statusCode = 401;
      throw new Error('A variável price precisa ser um número maior que zero!');
    }
    if(name && typeof(name) !== 'string'){
      res.statusCode = 401;
      throw new Error('A variável name precisa ser uma string!');
    }    
    if(typeof(id) !== 'number'){
      res.statusCode = 401;
      throw new Error('A variável id precisa ser um número!');
    }
    const idExist = products.filter( (product:any) => {
      return product.id === id
    })
    if(!idExist.length) {
      res.statusCode = 401;
      throw new Error(`Não existe produto com o id ${id} cadastrado!`);
    }

    products.forEach( (product:any) => {
      if(product.id === id) {
        if(price && name) {
          product.name = name;
          product.price = price;
        } else if (price) {
          product.price = price;
        } else if (name) {
          product.name = name;
        }
      }
    })

    res.send(products);

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})

// Exercício 6 / 9
app.delete("/delete/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const idExist = products.filter( (product:any) => {
      return product.id === id
    })

    if(!idExist.length) {
      res.statusCode = 401;
      throw new Error(`Não existe produto com o id ${id} cadastrado!`);
    }

    const newListProducts = products.filter( (product:any) => {
      return product.id !== id;
    })

    res.send(newListProducts);

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})

app.listen(3003, () => console.log("Servidor executando na porta 3003..."))

//   // Vou pegar as playlists de cada usuário
//   const userPlaylists = currentUsers.map((user: any) => {
//     return user.playlists
//   }) // array de arrays
//   console.log(2, userPlaylists)

//   const result = userPlaylists.flat(1)

//   res.status(200).send(result);
// })

// app.get("/playlists/search", (req: Request, res: Response) => {
//   const queriedName = req.query.name

//   if (!queriedName) {
//     res.status(400).send("Faltou a query 'name'")
//   }

//   const searchResult = []

//   for (let user of users) {
//     for (let playlist of user.playlists) {
//       if (playlist.name.includes(queriedName)) {
//         searchResult.push({
//           id: playlist.id,
//           name: playlist.name
//         })
//       }
//     }
//   }

//   res.send({
//     result: {
//       quantity: searchResult.length,
//       list: searchResult
//     }
//   })
// })

// app.get("/tracks", (req: Request, res: Response) => {
//   const playlistId = req.query.id

//   if (!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

//   const allPlaylists = users.map((user: any) => {
//     return user.playlists
//   }).flat(1)

//   let tracks;

//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       tracks = playlist.tracks
//     }
//   })

//   res.status(200).send(tracks)
// })

// app.post('/playlists', (req: Request, res: Response) => {
//   const playlistName = req.body.name
//   const userIdToAdd = req.headers.authorization

//   for (let i = 0; i < users.length; i++ ) {
//     if (users[i].id === userIdToAdd) {
//       users[i].playlists.push({
//         id: Date.now().toString(),
//         name: playlistName,
//         tracks: []
//       })
//     }
//   }

//   res.send({ users })
// })

// app.post("/playlists/:playlistId/tracks", (req: Request, res: Response) => {
//   const playlistIdToAdd = req.params.playlistId
//   const userIdToAdd = req.headers.authorization
//   const { name, artist, url } = req.body

//   // iterando users
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id === userIdToAdd) {
//       // iterando playlists do user
//       for (let j = 0; j < users[i].playlists.length; j++) {
//         if (users[i].playlists[j].id === playlistIdToAdd) {
//           users[i].playlists[j].tracks.push({
//             id: Date.now().toString(),
//             name,
//             artist,
//             url,
//           })
//         }
//       }
//     }
//   }


//   res.send({ users })
// })

// app.delete("/playlist", (req: Request, res: Response) => {
//   const id = req.query.id

//   users.forEach((user: any) => {
//     user.playlists = user.playlists.map((playlist: any) => {
//       if (playlist.id === id) {
//         return {}
//       }
//       return playlist
//     });
//   })

//   res.status(200).send(users)
// })

// app.delete("/track", (req: Request, res: Response) => {
//   const trackId = req.query.trackId
//   const playlistId = req.query.playlistId

//   const allPlaylists = users
//     .map((user: any) => {
//       return user.playlists;
//     })
//     .flat(1);
//   for (let i = 0; i <= allPlaylists.lenght; i++) {
//     allPlaylists[i]
//   }

//   for (let playlist of allPlaylists) {
//     playlist
//   }

//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       playlist.tracks = playlist.tracks.map((track: any) => {
//         if (track.id === trackId) {
//           return {};
//         }
//         return track;
//       });
//     }
//   })

//   res.status(200).send(allPlaylists)
// })