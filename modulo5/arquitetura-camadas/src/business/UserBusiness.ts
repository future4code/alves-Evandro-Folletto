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

  public getUsers = async (token: string, search: string, page: number, size: number) => {
    if (!token) {
      throw new Error("Não autorizado");
    }

    const payload = new Authenticator().getTokenPayload(token);

    const userDatabase = new UserDatabase()
    const userExist = await userDatabase.getUserById(payload.id);
    if (!userExist){
      throw new Error("Id não encontrado no sistema");
    }

    const offset: number = size * (page - 1);

    const users = await userDatabase.getUserBySearch(search, size, offset);

    if (!users){
      throw new Error("Nenhum usuário encontrado");
    }

    const response = {
      users
    }

    return response
  }

  public delete = async (token: string, id: string) => {
    if (!token) {
      throw new Error("Não autorizado");
    }
    if (!id) {
      throw new Error("É necessário informar o ID a ser deletado");
    }

    const userDatabase = new UserDatabase()
    const userExist = await userDatabase.getUserById(id);
    if (!userExist){
      throw new Error("O ID que você deseja deletar não foi encontrado");
    }

    const payload = new Authenticator().getTokenPayload(token);

    if (payload.id === id){
      throw new Error("Você não pode remover a si mesmo");
    }

    if(payload.role === USER_ROLES.NORMAL){
      throw new Error("Somente ADMIN pode deletar outro usuário");
    }

    await userDatabase.deleteUserById(id);

    // const response = {
    //   users
    // }

    // return response
  }
}