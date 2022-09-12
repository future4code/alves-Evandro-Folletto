import axios from "axios";
import { baseURL } from "./baseURL";

// a)
// https://labenews.herokuapp.com/subscribers

// b)
/*
  async function name-function(): Promise<any[]> {
    return
  }
*/

// c)
async function getAllSubscribers (): Promise<any[]> {
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
