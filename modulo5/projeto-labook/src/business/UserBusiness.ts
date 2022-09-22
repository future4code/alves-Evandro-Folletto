import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES, IUserDB ,ISignupInputDTO, ILoginInputDTO, 
         IGetUsersInputDTO, IGetUsersInputDBDTO, IGetUsersOutputDTO, 
         IDeleteUsersInputDTO, IEditInputDTO, IEditInputDBDTO } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ){}

  public signup = async (input: ISignupInputDTO) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;
    const role = input.role;

    if (!name || !email || !password) {
      throw new Error("Estão faltando parâmetros");
    }

    if (name.length < 3 || typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido")
    }

    if (password.length < 6 || typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido")
    }

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      throw new Error("Parâmetro 'email' inválido")
    }
    
    const emailExist = await this.userDatabase.getUserByEmail(email);
    if (emailExist) {
      throw new Error("Email já cadastrado");
    }

    const id = this.idGenerator.generate();

    const hashPassword = await this.hashManager.hash(password);

    const user = new User(
      id,
      name,
      email,
      hashPassword,
      role
    );

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole()
    }

    const token = this.authenticator.generateToken(payload)

    const response = {
      message: 'Cadastro realizado com sucesso!',
      token: token
    }

    return response
  }

  // public login = async (input: ILoginInputDTO) => {
  //   const email = input.email
  //   const password = input.password

  //   if (!email || !password) {
  //     throw new Error("Parâmetros faltando")
  //   }

  //   if (typeof email !== "string") {
  //     throw new Error("Parâmetro 'email' inválido")
  //   }

  //   if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
  //     throw new Error("Parâmetro 'email' inválido")
  //   }

  //   if (password.length < 6 || typeof password !== "string") {
  //     throw new Error("Parâmetro 'password' inválido")
  //   }

    
  //   const userDB = await this.userDatabase.getUserByEmail(email);
  //   if (!userDB) {
  //     throw new Error("Email não cadastrado no sistema");
  //   }

  //   const user = new User(
  //     userDB.id,
  //     userDB.name,
  //     userDB.email,
  //     userDB.password,
  //     userDB.role,
  //   )

    
  //   const correctPassword = await this.hashManager.compare(password, user.getPassword())
  //   if (!correctPassword) {
  //     throw new Error("Senha incorreta")
  //   }

  //   const payload: ITokenPayload = {
  //     id: user.getId(),
  //     role: user.getRole()
  //   }

    
  //   const token = this.authenticator.generateToken(payload)

  //   const response = {
  //     token
  //   }

  //   return response
  // }

  // public getUsers = async (input: IGetUsersInputDTO) => {
  //   const token = input.token;
  //   const search = input.search;
  //   const page = input.page;
  //   const size = input.size;

  //   if (!token) {
  //     throw new Error("Não autorizado");
  //   }

  //   const payload = this.authenticator.getTokenPayload(token);
  //   if (!payload) {
  //     throw new Error("Token inválido");
  //   }

    
  //   const userExist = await this.userDatabase.getUserById(payload.id);
  //   if (!userExist) {
  //     throw new Error("Id não encontrado no sistema");
  //   }

  //   const offset: number = size * (page - 1);

  //   const getUsersInputDB: IGetUsersInputDBDTO = {
  //     search,
  //     size,
  //     offset
  //   }

  //   const usersDB = await this.userDatabase.getUserBySearch(getUsersInputDB);
  //   if (!usersDB) {
  //     throw new Error("Nenhum usuário encontrado");
  //   }

  //   const users = usersDB.map( userDB => {
  //     const user = new User(
  //       userDB.id,
  //       userDB.name,
  //       userDB.email,
  //       userDB.password,
  //       userDB.role
  //     )
  //     const userResponse: IGetUsersOutputDTO = {
  //       id: user.getId(),
  //       name: user.getName(),
  //       email: user.getEmail(),
  //     }
  //     return userResponse
  //   })

  //   const response = {
  //     users
  //   }

  //   return response
  // }

  // public delete = async (input: IDeleteUsersInputDTO) => {
  //   const token = input.token;
  //   const id = input.id;

  //   if (!token) {
  //     throw new Error("Não autorizado");
  //   }
  //   if (!id) {
  //     throw new Error("É necessário informar o ID a ser deletado");
  //   }

    
  //   const userExist = await this.userDatabase.getUserById(id);
  //   if (!userExist) {
  //     throw new Error("O ID que você deseja deletar não foi encontrado");
  //   }

  //   const payload = this.authenticator.getTokenPayload(token);
  //   if (!payload) {
  //     throw new Error("Token inválido");
  //   }

  //   if (payload.id === id) {
  //     throw new Error("Você não pode remover a si mesmo");
  //   }

  //   if (payload.role !== USER_ROLES.ADMIN) {
  //     throw new Error("Somente ADMIN pode deletar outro usuário");
  //   }

  //   await this.userDatabase.deleteUserById(id);

  //   const response = {
  //     message: "Usuário deletado com sucesso!"
  //   }

  //   return response
  // }

  // public edit = async (input: IEditInputDTO) => {
  //   const id_edit = input.id_edit;
  //   const token = input.token;
  //   const name = input.name;
  //   const email = input.email;
  //   const password = input.password;

  //   if (!id_edit || !token || !name || !email || !password) {
  //     throw new Error("Estão faltando parâmetros");
  //   }

  //   if (name.length < 3 || typeof name !== "string") {
  //     throw new Error("Parâmetro 'name' inválido")
  //   }

  //   if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
  //     throw new Error("Parâmetro 'email' inválido")
  //   }

  //   if (password.length < 6 || typeof password !== "string") {
  //     throw new Error("Parâmetro 'password' inválido")
  //   }


  //   const userDB = await this.userDatabase.getUserById(id_edit);
  //   if (!userDB) {
  //     throw new Error("O ID que você deseja editar não foi encontrado");
  //   }

  //   const payload = this.authenticator.getTokenPayload(token);
  //   if (!payload) {
  //     throw new Error("Token inválido");
  //   }
  //   if(payload.role === USER_ROLES.NORMAL && payload.id !== id_edit) {
  //     throw new Error("Você só tem autorização para editar seus próprios dados!");
  //   }

  //   const user = new User(
  //     userDB.id,
  //     userDB.name,
  //     userDB.email,
  //     userDB.password,
  //     userDB.role
  //   )

  //   user.setId(id_edit);
  //   user.setName(name);
  //   user.setPassword(password);

  //   await this.userDatabase.editUserById(user);

  //   const response = {
  //     message: "Usuário editado com sucesso!"
  //   }

  //   return response
  // }
}