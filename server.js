import express from 'express'

const app = express()
const users = []

app.post('/usuarios', (req, res) => {
    
})

app.get('/usuarios', (req, res) => {
    res.send('Ok, deu bom')
})

app.listen(3000)

/* 
    Criar nossa API de Usuários
    - Criar um Usuário
    - Listar todos os Usuários
    - Editar um Usuário
    - Deletar um Usuário
*/

/* 
1) Tipo de Rota / Mettodo HTTP
2) Endereço
*/
