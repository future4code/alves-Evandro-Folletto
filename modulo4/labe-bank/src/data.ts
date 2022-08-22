export let accounts: any = [
  {
    name: "pedro",
    cpf: "111.111.111-11",
    birthDate: "01/01/1990",
    balance: 200,
    extract: [
      {
        value: 10,
        date: '10/01/2022',
        description: 'lanche',
        jaDescontado: false,
      },
      {
        value: 20,
        date: '10/02/2022',
        description: 'almoço',
        jaDescontado: false,
      }
    ]
  },
  {
    name: "joão",
    cpf: "222.222.222-22",
    birthDate: "01/01/1980",
    balance: 200,
    extract: [
      {
        value: 30,
        date: '10/05/2022',
        description: 'janta',
        jaDescontado: false,
      }
    ]
  },
]