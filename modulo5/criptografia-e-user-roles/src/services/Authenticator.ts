import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { USER_ROLES } from "./../types";

dotenv.config();

type AuthenticationData = {
  id: string;
  role: USER_ROLES
}

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    input,
    process.env.JWT_KEY as string,
    {
      expiresIn: process.env.EXPIRES_IN
    }
  );
  return token;
}

// função chamada de getData() no exercício de ontem
export const verifyToken = (token: string) => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  return payload;
};