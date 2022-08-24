import { Request, Response } from "express";
import app from './app';
import connection from './connection';

// Esse arquivo seria o index.ts
const getActorById = async (id: string): Promise<any> => {
  const [result] = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result
}

const getActorByName = async (name: string): Promise<any> => {
  const [result] = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

	return result
}




// Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log(await getActorById(id))
    res.end()
  } catch (error:any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

app.get("/users", async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    console.log(await getActorByName(name));
    res.end();
  } catch (error:any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})