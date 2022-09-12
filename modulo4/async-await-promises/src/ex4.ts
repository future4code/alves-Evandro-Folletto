import axios from "axios";
import { baseURL } from "./baseURL";

type news = {
	title: string;
	content: string;
	date: number;
}

// a)
// função sem retorno

// b)
const createNews = async (body:news): Promise<void> => {
  await axios.put(`${baseURL}/news`,
  {
    body
  })
}

const body = {
	"title": "a viga atingiu o momento máximo",
	"content": "utilizando a fórmula q*l*l/8 ela atingiu seu momento máximo!",
	"date": 1589818936000
}

const main = async () => {
  try {
    await createNews(body)
  } catch (error: any) {
    const resp = error.response?.data || error.message
    console.log(resp)
  }
}
main()