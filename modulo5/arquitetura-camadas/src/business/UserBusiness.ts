import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name
    const email = input.email
    const password = input.password

    if (!name || typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido")
    }

    if (name.length < 3) {
      throw new Error("O parâmetro 'name' deve possuir pelo menos 3 parâmatros")
    }

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido")
    }

    if (!email.includes('@')) {
      throw new Error("Email inválido")
    }

    if (!password || typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido")
    }

    if (password.length < 6) {
      throw new Error("A senha deve possuir pelo menos 6 parâmatros")
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hashPassword = await hashManager.hash(password)

    const user = new User(
      id,
      name,
      email,
      hashPassword
    )

    const userDatabase = new UserDatabase()
    const emailExist = await userDatabase.getUserByEmail(email);
    if (emailExist){
      throw new Error("Email já cadastrado");
    }
    await userDatabase.createUser(user)

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole()
    }

    const authenticator = new Authenticator()
    const token = authenticator.generateToken(payload)

    const response = {
      token
    }

    return response
  }

  public login = async (input: any) => {
    const email = input.email
    const password = input.password

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido")
    }

    if (!email.includes('@')) {
      throw new Error("Email inválido")
    }

    if (!password || typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido")
    }

    if (password.length < 6) {
      throw new Error("A senha deve possuir pelo menos 6 parâmatros")
    }

    const userDatabase = new UserDatabase()
    const userExist = await userDatabase.getUserByEmail(email);
    if (!userExist){
      throw new Error("Email não cadastrado no sistema");
    }

    const hashManager = new HashManager()
    const correctPassword = await hashManager.compare(password, userExist[0].password)

    const payload: ITokenPayload = {
      id: userExist[0].id,
      role: userExist[0].role
    }

    const authenticator = new Authenticator()
    const token = authenticator.generateToken(payload)

    const response = {
      token
    }

    return response
  }
}