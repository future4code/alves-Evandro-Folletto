import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

type AuthenticationData = {
  id: string;
}

export default function getData (token: string): AuthenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};