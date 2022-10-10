import { v4 } from 'uuid';

export class IdGeneratorMock {
  public generate = (): string => {
    return "id-mock"
  }
}