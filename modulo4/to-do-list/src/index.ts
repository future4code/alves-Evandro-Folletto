import app from './app';
import createUser from './endpoint/1-createUser';
import getUserById from './endpoint/2-getUserById';
import editUser from './endpoint/3-editUser';
import createTask from './endpoint/4-createTask';
import getTaskById from './endpoint/5-getTaskById';
import getAllUsers from './endpoint/6-getAllUsers';
import getAllTasksByUser from './endpoint/7-getAllTasksByUser';
import searchUser from './endpoint/8-searchUser';
import responsibleTask from './endpoint/9-responsibleTask';
import getUsersResponsibleTask from './endpoint/10-getUsersResponsibleTask';
import getTaskByIdAndYourResponsibles from './endpoint/11-getTaskByIdAndYourResponsibles';
import updateStatusById from './endpoint/12-updateStatusById';

// 1 - criar usuário
app.post('/user', createUser);

// 6 - obter todos os usuários
app.get('/user/all', getAllUsers);

// 2 - obter usuário por id
app.get('/user/:id', getUserById);

// 3 - editar usuário
app.put('/user/edit/:id', editUser);

// 4 - criar tarefa
app.post('/task', createTask);

// 5 - obter tarefa pelo id
app.get('/task/:id', getTaskById);

// 7 - obter todas as tarefas criadas por um usuário
app.get('/task', getAllTasksByUser);

// 8 - pesquisar usuário
app.get('/user', searchUser);

// 9 - atribuir responsabilidade tarefa
app.post('/task/responsible', responsibleTask);

// 10 - obter usuários responsáveis por uma tarefa
app.get('/task/:id/responsible', getUsersResponsibleTask);

// 11 - obter tarefa pelo id e os seus responsáveis
app.get('/task/:id/responsiblesTask', getTaskByIdAndYourResponsibles);

// 12 - atualizar status de uma tarefa pelo seu ID
app.put('/task/status/:id', updateStatusById);