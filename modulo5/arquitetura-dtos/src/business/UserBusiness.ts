import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES, IUserDB ,ISignupInputDTO, ISignupOutputDTO, ILoginInputDTO, IGetUsersInputDTO, IGetUsersInputDBDTO, IGetUsersOutputDTO } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
  public signup = async (input: ISignupInputDTO) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;

    if (!name || !email || !password) {
      throw new Error("Estão faltando parâmetros");
    }

    if (name.length < 3 || typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido")
    }

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      throw new Error("Parâmetro 'email' inválido")
    }

    if (password.length < 6 || typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido")
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const user = new User(
      id,
      name,
      email,
      hashPassword
    );

    const userDatabase = new UserDatabase();
    const emailExist = await userDatabase.getUserByEmail(email);
    if (emailExist) {
      throw new Error("Email já cadastrado");
    }
    await userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole()
    }

    const authenticator = new Authenticator()
    const token = authenticator.generateToken(payload)

    const response: ISignupOutputDTO = {
      message: 'Cadastro realizado com sucesso!',
      token: token
    }

    return response
  }

  public login = async (input: ILoginInputDTO) => {
    const email = input.email
    const password = input.password

    if (!email || !password) {
      throw new Error("Parâmetros faltando")
    }

    if (typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido")
    }

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      throw new Error("Parâmetro 'email' inválido")
    }

    if (password.length < 6 || typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido")
    }

    const userDatabase = new UserDatabase()
    const userDB = await userDatabase.getUserByEmail(email);
    if (!userDB) {
      throw new Error("Email não cadastrado no sistema");
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
    )

    const hashManager = new HashManager()
    const correctPassword = await hashManager.compare(password, user.getPassword())
    if (!correctPassword) {
      throw new Error("Senha incorreta")
    }

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

  public getUsers = async (input: IGetUsersInputDTO) => {
    const token = input.token;
    const search = input.search;
    const page = input.page;
    const size = input.size;

    if (!token) {
      throw new Error("Não autorizado");
    }

    const payload = new Authenticator().getTokenPayload(token);
    if (!payload) {
      throw new Error("Token inválido");
    }

    const userDatabase = new UserDatabase()
    const userExist = await userDatabase.getUserById(payload.id);
    if (!userExist) {
      throw new Error("Id não encontrado no sistema");
    }

    const offset: number = size * (page - 1);

    const getUsersInputDB: IGetUsersInputDBDTO = {
      search,
      size,
      offset
    }

    const usersDB = await userDatabase.getUserBySearch(getUsersInputDB);
    if (!usersDB) {
      throw new Error("Nenhum usuário encontrado");
    }

    const users = usersDB.map( userDB => {
      const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role
      )
      const userResponse: IGetUsersOutputDTO = {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
      }
      return userResponse
    })

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
    if (!userExist) {
      throw new Error("O ID que você deseja deletar não foi encontrado");
    }

    const payload = new Authenticator().getTokenPayload(token);

    if (payload.id === id) {
      throw new Error("Você não pode remover a si mesmo");
    }

    if (payload.role === USER_ROLES.NORMAL) {
      throw new Error("Somente ADMIN pode deletar outro usuário");
    }

    await userDatabase.deleteUserById(id);

    // const response = {
    //   users
    // }

    // return response
  }
}