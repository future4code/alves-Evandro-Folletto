import app from './app';
import createUser from './endpoint/1-createUser';
import getUserById from './endpoint/2-getUserById';
import editUser from './endpoint/3-editUser';
import createTask from './endpoint/4-createTask';
import getTaskById from './endpoint/5-getTaskById';
import getAllUsers from './endpoint/6-getAllUsers';
import getAllTasksByUser from './endpoint/7-getAllTasksByUser';
import searchUser from './endpoint/8-searchUser';
import responsibleTask from './endpoint/9_16-responsibleTask';
import getUsersResponsibleTask from './endpoint/10-getUsersResponsibleTask';
import getTaskByIdAndYourResponsibles from './endpoint/11-getTaskByIdAndYourResponsibles';
import updateStatusById from './endpoint/12_18-updateStatusById';
import getTasksByStatus from './endpoint/13-getTasksByStatus';
import getTasksDelayed from './endpoint/14-getTasksDelayed';
import deleteResponsibleTask from './endpoint/15-deleteResponsibleTask';
import searchTaskByTerm from './endpoint/17-searchTaskByTerm';
import deleteTask from './endpoint/19-deleteTask';
import deleteUser from './endpoint/20-deleteUser';

// 13 - obter todas as tarefas por status
app.get('/task/search', getTasksByStatus);

// 14 - obter taregas atrasadas
app.get('/task/delayed', getTasksDelayed);

// 17 - pesquisar tarefa por termos
app.get('/task/termo', searchTaskByTerm);

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

// 9 / 16 - atribuir responsabilidades de tarefa
app.post('/task/responsible', responsibleTask);

// 10 - obter usuários responsáveis por uma tarefa
app.get('/task/:id/responsible', getUsersResponsibleTask);

// 11 - obter tarefa pelo id e os seus responsáveis
app.get('/task/:id/responsiblesTask', getTaskByIdAndYourResponsibles);

// 12 / 18 - atualizar status de tarefas por seus IDs
app.put('/task/status/edit', updateStatusById);

// 15 - retirar um usuário responsável por uma tarefa
app.delete('/task/:taskId/responsible/:responsibleUserId', deleteResponsibleTask);

// 19 - deletar tarefa
app.delete('/task/:id', deleteTask);

// 20 - deletar usuário
app.delete('/user/:id', deleteUser);