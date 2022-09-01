import app from "./app"
import recebeCEP from './endpoints/1.recebeCEP'
import registerUser from './endpoints/3.registerUser'

// Exercício 1
app.get('/cep', recebeCEP)

// Exercício 2
// Foi resolvido no próprio MySQL Workbench

// Exercício 3
app.post('/user', registerUser)