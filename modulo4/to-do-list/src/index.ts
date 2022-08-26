import app from './app';
import createUser from './endpoint/createUser';
import getUser from './endpoint/getUser';
import editUser from './endpoint/editUser';
import createTask from './endpoint/createTask';
import getTask from './endpoint/getTask';

// 1 - criar usuário
app.post('/user', createUser);

// 2 - obter usuário por id
app.get('/user/:id', getUser);

// 3 - editar usuário
app.put('/user/edit/:id', editUser);

// 4 - criar tarefa
app.post('/task', createTask);

// 4 - obter tarefa pelo id
app.get('/task/:id', getTask);