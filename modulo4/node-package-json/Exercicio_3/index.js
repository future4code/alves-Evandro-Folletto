// carrega o pacote fs
const fs = require('fs');

// abre o arquivo "save.json" e salva em uma variável
let listaTarefas = JSON.parse(fs.readFileSync(__dirname + "/save.json"));

// recebe o valor do usuário
const novaTarefa = process.argv[2];

// armazena a tarefa que o usuário digitou e coloca dentro do array carregado
if(novaTarefa){
  listaTarefas.push(novaTarefa);
} else {
  console.log('É necessário digitar alguma tarefa');
}

// salva novamente o arquivo
fs.writeFileSync(__dirname + '/save.json', JSON.stringify(listaTarefas));