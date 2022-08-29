import axios from "axios";
import { baseURL } from "./baseURL";

// a)
// na função nomeada a palavra async é escrita no início, enquanto na função arow ela é escrita depois do símbolo de igual "="

// b)
const getAllSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data
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