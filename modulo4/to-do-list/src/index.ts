import app from './app';
import createUser from './endpoint/createUser';
import getUser from './endpoint/getUser';
import editUser from './endpoint/editUser';
import createTask from './endpoint/createTask';
import getTask from './endpoint/getTask';
import getAllUsers from './endpoint/getAllUsers';

// 1 - criar usuário
app.post('/user', createUser);

// 6 - obter todos os usuários
app.get('/user/all', getAllUsers);

// 2 - obter usuário por id
app.get('/user/:id', getUser);

// 3 - editar usuário
app.put('/user/edit/:id', editUser);

// 4 - criar tarefa
app.post('/task', createTask);

// 5 - obter tarefa pelo id
app.get('/task/:id', getTask);

