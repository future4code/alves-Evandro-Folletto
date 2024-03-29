import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


type AuthenticationData = {
  id: string;
}

// const expiresIn = "1min";

export default function generateToken(input: AuthenticationData): string {
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