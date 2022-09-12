import axios from 'axios';
const baseURL = "https://viacep.com.br/ws";
import { endereco } from "../types";

const getCEP = async (cep:string, logradouroEntrada:string, bairroEntrada:string): Promise<{}> => {
  try {
    const res = await axios.get(`${baseURL}/${cep}/json`);
    const { logradouro, bairro, localidade, uf } = res.data

    const newObj = {
      logradouro: logradouro ? logradouro : logradouroEntrada,
      bairro: bairro ? bairro : bairroEntrada,
      cidade: localidade,
      estado: uf
    }

    return newObj
  } catch (error) {
    throw new Error();
  }
}

export default getCEP;