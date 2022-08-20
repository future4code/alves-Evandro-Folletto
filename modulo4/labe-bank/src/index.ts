import express, { Request, Response } from 'express';
import cors from 'cors';
import { accounts } from "./data"

const app = express();
app.use(express.json());
app.use(cors());

type transaction = {
  value: number,
  date: Date,
  description: string,
}

type userAccount = {
  name: string,
  cpf: string,
  birthDate: string,
  balance: number,
  extract: transaction[],
}

function calAge(dataNasc:string) {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth()+1;
  const diaAtual = dataAtual.getDate();
  const anoNascParts = dataNasc.split('/');
  const diaNasc = Number(anoNascParts[0]);
  const mesNasc = Number(anoNascParts[1]);
  const anoNasc = Number(anoNascParts[2]);
  let idade = anoAtual - anoNasc;
  
  if(mesAtual < mesNasc) {
    idade--;
  } else {
    if(mesAtual === mesNasc){
      if(diaAtual < diaNasc) idade--
    }
  }

  return idade
}

// Obter todas as contas
app.get("/accounts", (req: Request, res: Response) => {
  res.send(accounts);
})

// Criar conta
app.post("/account", (req: Request, res: Response) => {
  try {
    const { name, cpf, birthDate } = req.body;
    if(!name || !cpf || !birthDate) {
      res.statusCode = 401;
      throw new Error('Existem dados faltantes!');
    }
    const idade = calAge(birthDate);
    if(idade < 18) {
      res.statusCode = 401;
      throw new Error('É necessário ser maior de idade para criar conta!');
    }
    if(typeof(name) !== 'string' || typeof(cpf) !== 'string' || typeof(birthDate) !== 'string') {
      res.statusCode = 401;
      throw new Error('Os formatos de todos os dados devem ser strings!');
    }
    const cpfExist = accounts.filter( (account:userAccount) => {
      return cpf === account.cpf
    })
    if(cpfExist.length) {
      res.statusCode = 401;
      throw new Error('O CPF fornecido já existe!');
    }
    const newAccount = {name, cpf, birthDate};
    accounts.push(newAccount);
    res.status(200).send("Conta criada com sucesso!")
  } catch (error:any) {
    res.status(res.statusCode).send({ message: error.message })
  }
})

// Obter saldo da conta
app.get("/balance", (req: Request, res: Response) => {
  try {
    const { cpf } = req.body;
    if(!cpf) {
      res.statusCode = 401;
      throw new Error('Existem dados faltantes!');
    }
    if(typeof(cpf) !== 'string') {
      res.statusCode = 401;
      throw new Error('Os formatos de todos os dados devem ser strings!');
    }
    const balanceAccount = accounts.filter( (account:userAccount) => {
      return account.cpf === cpf
    })
    if(!balanceAccount.length){
      res.statusCode = 401;
      throw new Error('A conta não foi encontrada!');
    } else {
      res.send(`O saldo da sua conta é R$ ${balanceAccount[0].balance}`);
    }
  } catch (error:any) {
    res.status(res.statusCode).send({ message: error.message });
  }
})

// Depositar
app.put("/deposit", (req: Request, res: Response) => {
  try {
    const { name, cpf, value } = req.body;
    if(!name || !cpf || !value) {
      res.statusCode = 401;
      throw new Error('Existem dados faltantes!');
    }
    if(typeof(name) !== 'string' || typeof(cpf) !== 'string' || typeof(value) !== 'number') {
      res.statusCode = 401;
      throw new Error('Verificar o formato dos valores da requisição!');
    }
    accounts.map( (account:userAccount) => {
      if(account.name === name && account.cpf === cpf){
        account.balance += value;
        const newTransaction = {
          value,
          date: new Date(),
          description: "Depósito de dinheiro",
        }
        account.extract.push(newTransaction);
      }
    })
    res.status(200).send(`Depósito efetuado com sucesso!`);
  } catch (error:any) {
    res.status(res.statusCode).send({ message: error.message });
  }
})

// Pagar conta
app.post("/pay", (req: Request, res: Response) => {

  const data3 = '01/02/2020';
  const data3B = data3.split('/');

  const aux = data3B[0];
  data3B[0] = data3B[2];
  data3B[2] = aux;
  const dataString = data3B.join("");

  console.log(dataString);
  res.send(dataString);

  const data0 = new Date();
  // const data1 = new Date('2000-01-01');
  const data1 = new Date('11/20/2010');
  const data2 = new Date('02/04/2210');
  // const data2 = '01/01/2022';
  
  const dataAgora = new Date();
  
  // res.send(data0>data1);

  // try {
  //   const { cpf, description, value, vencimento } = req.body;
  //   if(!cpf || !description || !value || !vencimento) {
  //     res.statusCode = 401;
  //     throw new Error('Existem dados faltantes!');
  //   }
  //   if(typeof(cpf) !== 'string' || typeof(value) !== 'number') {
  //     res.statusCode = 401;
  //     throw new Error('Verificar o formato dos valores da requisição!');
  //   }
  //   accounts.map( (account:userAccount) => {
  //     if(account.name === name && account.cpf === cpf){
  //       account.balance += value;
  //       const newTransaction = {
  //         value,
  //         date: new Date(),
  //         description: "Depósito de dinheiro",
  //       }
  //       account.extract.push(newTransaction);
  //     }
  //   })
  //   res.status(200).send(`Depósito efetuado com sucesso!`);
  // } catch (error:any) {
  //   res.status(res.statusCode).send({ message: error.message });
  // }
})

app.listen(3003, () => {
  console.log('Servidor executando na porta 3003...')
})
