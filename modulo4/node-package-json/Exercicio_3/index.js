const fs = require('fs');

const dados = fs.readFileSync(__dirname + "/save.json", err => {
  if (err) {
    return console.error(err)
  }
  // feito
});

console.log('o valor lido é:',dados)

// if (dados === undefined) {
//   let listaTarefas = [];
// } else {
//   let listaTarefas = JSON.parse(dados);
// }

// const novaTarefa = process.argv[2];
// listaTarefas.push(novaTarefa)

// fs.writeFileSync(__dirname + '/save.json', listaTarefas);