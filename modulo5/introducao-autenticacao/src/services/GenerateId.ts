import { v4 } from "uuid";

export default function GenerateId(): string {
  return v4();
}