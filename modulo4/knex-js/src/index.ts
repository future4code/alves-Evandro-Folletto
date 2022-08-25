import { Request, Response } from "express";
import app from './app';
import connection from './connection';

// -------------------------------------------------------------------------------
// EXERCÍCIO 1
// -------------------------------------------------------------------------------
// letra a) 
// a resposta é do tipo array com outros dois arrays, algo como [ [],[] ].

// letra b)
const dateActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

// letra c)
const dateGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};

// -------------------------------------------------------------------------------
// EXERCÍCIO 2
// -------------------------------------------------------------------------------
// letra a)
const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where({
      "id": id
    });
};

// letra b)
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where({
      "id": id
    });
};

// letra c)
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ 
      "gender": gender
    });
  return result[0].average;
};

// -------------------------------------------------------------------------------
// EXERCÍCIO 3
// -------------------------------------------------------------------------------
// letra a)
const getActorById = async (id: string): Promise<any> => {
  const result = await connection("Actor")
  .select() // se quiser selecionar propriedades específicas: .select("name", "salary")
  .where({
    "id": id
  })

	return result
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// letra b)
const totalActorByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
  .count("* as total") // se quiser selecionar propriedades específicas: .select("name", "salary")
  .where({
    "gender": gender
  })

	return result
}

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender as string;
    const total = await totalActorByGender(gender);

    res.status(200).send(total)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// -------------------------------------------------------------------------------
// EXERCÍCIO 4
// -------------------------------------------------------------------------------
// letra a)
app.put("/actor", async (req: Request, res: Response) => {
  try {
    const {id, salary} = req.body;
    
    await connection("Actor")
    .update({
      "salary": salary
    })
    .where({
      "id": id
    })

    res.status(200).send('Salário atualizado com sucesso!');
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// letra b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id= req.params.id;
    
    await connection("Actor")
    .delete()
    .where({
      "id": id
    });

    res.status(200).send('Ator/atriz deletado(a) com sucesso!');
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// -------------------------------------------------------------------------------
// EXERCÍCIO 5
// -------------------------------------------------------------------------------
const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  rating: number
) => {
  await connection("Filmes")
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      relese_Date: releaseDate,
      rating: rating,
    })
    .into("Filmes");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    const {id, title, synopsis, relese_Date, rating} = req.body;
    await createMovie(id, title, synopsis, new Date(relese_Date), rating)
    res.status(200).send("Filme adicionado com sucesso!");
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// -------------------------------------------------------------------------------
// EXERCÍCIO 6
// -------------------------------------------------------------------------------
const getAll = async (): Promise<any> => {
  const dados = await connection("Filmes")
    .select('*')
    .limit(15);

    return dados;
};

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const filmes = await getAll()
    res.status(200).send(filmes);
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// -------------------------------------------------------------------------------
// EXERCÍCIO 7
// -------------------------------------------------------------------------------
const searchMovie = async (movie: string): Promise<any> => {
  const filmes = await connection("Filmes")
    .select('*')
    // .where('title', 'like', `%${movie}%`)
    .where('title', 'like', `%${movie}%`)
    // .where('synopsis', 'like', `%${movie}%`)

    return filmes;
};

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const search = req.query.query as string;
    const movies = await searchMovie(search);
    res.status(200).send(movies);
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});