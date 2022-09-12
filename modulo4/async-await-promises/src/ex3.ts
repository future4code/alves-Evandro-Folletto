import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
	id: string;
	name: string;
	email: string;
}

// a)
// sim. A mensagem é que não foi encontrado o nome "user"

// b)
// 

// c)
const getAllSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data.map( (res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    }
  })
}

const main = async () => {
  try {
    const subscribers = await getAllSubscribers()
    console.log(subscribers)
  } catch (error: any) {
    const resp = error.response?.data || error.message
    console.log(resp)
  }
}
main()