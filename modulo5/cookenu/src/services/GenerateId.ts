import { v4 } from "uuid"

export default class GenerateId {
  createId(): string {
    return v4();
  }
}