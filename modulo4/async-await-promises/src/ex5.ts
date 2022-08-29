import axios from "axios";
import { baseURL } from "./baseURL";

const sendNotifications = async(users:string[], message:string): Promise<void> => {
  try {

    for(let id of users){
      await axios.post(`${baseURL}/notifications`,
      {
        "subscriberId": id,
        "message": message
      });
    }

    console.log('ok');
  } catch (error:any) {
    console.log('Error');
  }
}
const users = [
  "4188567e-27c6-446c-8b4e-1bb1b92b6292",
  "44671e4b-1e41-4247-ad97-b2da9180aac4",
  "47bb6354-41fd-4f40-9601-8332e2a96f31"
];
const message = "mensagem de teste";
sendNotifications(users, message);