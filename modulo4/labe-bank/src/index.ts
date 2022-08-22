import express, { Request, Response } from 'express';
import cors from 'cors';
import { accounts } from "./data"

const app = express();
app.use(express.json());
app.use(cors());

type transaction = {
  cpf: number,
  value: number,
  description: string,
  date?: Date,
}

type userAccount = {
  name: string,
  cpf: string,
  birthDate: string,
  balance: number,
  extract: transaction[],
}

function calAge(dataNasc: string) {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;
  const diaAtual = dataAtual.getDate();
  const anoNascParts = dataNasc.split('/');
  const diaNasc = Number(anoNascParts[0]);
  const mesNasc = Number(anoNascParts[1]);
  const anoNasc = Number(anoNascParts[2]);
  let idade = anoAtual - anoNasc;

  if (mesAtual < mesNasc) {
    idade--;
  } else {
    if (mesAtual === mesNasc) {
      if (diaAtual < diaNasc) idade--
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
    if (!name || !cpf || !birthDate) {
      res.statusCode = 401;
      throw new Error('Existem dados faltantes!');
    }
    const idade = calAge(birthDate);
    if (idade < 18) {
      res.statusCode = 401;
      throw new Error('É necessário ser maior de idade para criar conta!');
    }
    if (typeof (name) !== 'string' || typeof (cpf) !== 'string' || typeof (birthDate) !== 'string') {
      res.statusCode = 401;
      throw new Error('Os formatos de todos os dados devem ser strings!');
    }
    const cpfExist = accounts.filter((account: userAccount) => {
      return cpf === account.cpf
    })
    if (cpfExist.length) {
      res.statusCode = 401;
      throw new Error('O CPF fornecido já existe!');
    }
    const newAccount = { name, cpf, birthDate };
    accounts.push(newAccount);
    res.status(200).send("Conta criada com sucesso!")
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message })
  }
})

// Obter saldo da conta
app.get("/balance", (req: Request, res: Response) => {
  try {
    const { cpf } = req.body;
    if (!cpf) {
      res.statusCode = 401;
      throw new Error('Existem dados faltantes!');
    }
    if (typeof (cpf) !== 'string') {
      res.statusCode = 401;
      throw new Error('Os formatos de todos os dados devem ser strings!');
    }
    const balanceAccount = accounts.filter((account: userAccount) => {
      return account.cpf === cpf
    })
    if (!balanceAccount.length) {
      res.statusCode = 401;
      throw new Error('A conta não foi encontrada!');
    } else {
      res.send(`O saldo da sua conta é R$ ${balanceAccount[0].balance}`);
    }
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
})

// Depositar
app.put("/deposit", (req: Request, res: Response) => {
  try {
    const { name, cpf, value } = req.body;
    if (!name || !cpf || !value) {
      res.statusCode = 401;
      throw new Error('Existem dados faltantes!');
    }
    if (typeof (name) !== 'string' || typeof (cpf) !== 'string' || typeof (value) !== 'number') {
      res.statusCode = 401;
      throw new Error('Verificar o formato dos valores da requisição!');
    }
    accounts.map((account: userAccount) => {
      if (account.name === name && account.cpf === cpf) {
        account.balance += value;
        const newTransaction: any = {
          value,
          // date: new Date(),
          date: (new Date()).toLocaleDateString(),
          description: "Depósito de dinheiro",
        }
        account.extract.push(newTransaction);
      }
    })
    res.status(200).send(`Depósito efetuado com sucesso!`);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
})

function stringDateInDate(vencimento: string) {
  let vencArray = vencimento.split('/');
  const aux = [vencArray[2], vencArray[1], vencArray[0]];
  vencArray = aux;
  const dataString = vencArray.join("/");
  
  return new Date(dataString)
}

// Pagar conta
app.post("/pay", (req: Request, res: Response) => {
  try {
    let { cpf, description, value, date } = req.body;
    date = date ? stringDateInDate(date) : new Date();
    if (date < new Date()) {
      res.statusCode = 401;
      throw new Error('A data não pode ser inferior a data atual!');
    }
    if (!cpf || !description || !value) {
      res.statusCode = 401;
      throw new Error('Existem dados obrigatórios faltantes!');
    }
    if (typeof (cpf) !== 'string' || typeof (description) !== 'string' || typeof (value) !== 'number') {
      res.statusCode = 401;
      throw new Error('Verificar o formato dos valores da requisição!');
    }
    accounts.map((account: userAccount) => {
      if (account.cpf === cpf) {
        if(value > account.balance){
          res.statusCode = 401;
          throw new Error('Saldo indisponível!');
        }
        const newTransaction: any = {
          description,
          value,
          date: date.toLocaleDateString(),
          jaDescontado: false,
        }
        account.extract.push(newTransaction);
      }
    })
    res.status(200).send(`Pagamento efetuado com sucesso!`);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
})

// Atualizar saldo
app.put("/balance", (req: Request, res: Response) => {
  accounts.forEach((account: any) => {
    let sumArray = 0;
    for(let i=0 ; i<account.extract.length ; i++){
      if(account.extract[i].description === "Transferência realizada" && !account.extract[i].jaDescontado) {
        sumArray += account.extract[i].value;
        account.extract[i].jaDescontado = true;
      } else if(account.extract[i].description === "Transferência recebida" && !account.extract[i].jaDescontado) {
        sumArray -= account.extract[i].value;
        account.extract[i].jaDescontado = true;
      // } else if(account.extract[i].description !== "Depósito de dinheiro" && stringDateInDate(account.extract[i].date) < new Date() && !account.extract[i].jaDescontado){
      } else if(account.extract[i].description !== "Depósito de dinheiro" && !account.extract[i].jaDescontado){
        console.log(account.extract[i].date)
        // stringDateInDate(account.extract[i].date)
        sumArray += account.extract[i].value;
        account.extract[i].jaDescontado = true;
      }
    }
    account.balance -= sumArray;
  })
  res.status(200).send(`Saldos atualizados com sucesso!`);
})

// Transferência entre contas
app.post("/transfer", (req: Request, res: Response) => {
  try {
    let { nameSender, cpfSender, nameRecipient, cpfRecipient, value } = req.body;
    if (!nameSender || !cpfSender || !nameRecipient || !cpfRecipient || !value) {
      res.statusCode = 401;
      throw new Error('Existem dados obrigatórios faltantes!');
    }
    if (typeof(nameSender) !== 'string' || typeof(cpfSender) !== 'string' || typeof(nameRecipient) !== 'string' || typeof(cpfRecipient) !== 'string' || typeof(value) !== 'number') {
      res.statusCode = 401;
      throw new Error('Verificar o formato dos valores da requisição!');
    }
    const accountSenderExist = accounts.filter( (account:userAccount) => {
      return account.name === nameSender && account.cpf === cpfSender      
    })
    if (!accountSenderExist.length) {
      res.statusCode = 401;
      throw new Error('A conta do remetente não foi encontrada!');
    }
    const accountRecipientExist = accounts.filter( (account:userAccount) => {
      return account.name === nameRecipient && account.cpf === cpfRecipient
    })
    if (!accountRecipientExist.length) {
      res.statusCode = 401;
      throw new Error('A conta do destinatário não foi encontrada!');
    }
    accounts.map((account: userAccount) => {
      if (account.name === nameSender && account.cpf === cpfSender) {
        if (value > account.balance){
          res.statusCode = 401;
          throw new Error('Saldo insuficiente para realizar a transferência!');
        }
        const newTransaction: any = {
          description: "Transferência realizada",
          value,
          // date: new Date(),
          date: (new Date()).toLocaleDateString(),
          jaDescontado: false,
        }
        account.extract.push(newTransaction);
      }
    })
    accounts.map((account: userAccount) => {
      if (account.name === nameRecipient && account.cpf === cpfRecipient) {
        const newTransaction: any = {
          description: "Transferência recebida",
          value,
          // date: new Date(),
          date: (new Date()).toLocaleDateString(),
          jaDescontado: false,
        }
        account.extract.push(newTransaction);
      }
    })

    res.status(200).send(`Pagamento efetuado com sucesso!`);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
})

app.get("/teste", (req: Request, res: Response) => {
  // const data = "30/05/2022";
  // const data2 = data.toLocaleDateString()

  // const data = (new Date()).toLocaleDateString()
  // res.send(`data: ${data}, tipo: ${typeof(data)}`);

  // const data = new Date();
  // const data2 = data.toLocaleDateString()
  // res.send(`data: ${data}, tipo: ${typeof(data)} | data2: ${data2}, tipo: ${typeof(data2)}`);

})

app.listen(3003, () => {
  console.log('Servidor executando na porta 3003...')
})
