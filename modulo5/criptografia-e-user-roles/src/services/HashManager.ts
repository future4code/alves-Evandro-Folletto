import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config()

export const generateHash = async (plaintext: string) => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const hash = await bcrypt.hash(plaintext, salt);

  return hash
}

export const compare = async (plaintext: string, hash: string) => {
  return bcrypt.compare(plaintext, hash)
}