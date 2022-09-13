import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

type AuthenticationData = {
  id: string;
}

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: process.env.EXPIRES_IN
    }
  );
  return token;
}

export const verifyToken = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};