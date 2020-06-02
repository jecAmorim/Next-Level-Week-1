import express, { response, request } from 'express';

const app = express();

app.get('/users',(request, response) => {
    console.log('Listagens de Usuários');
    response.send('Listagens de Usuários');
});
app.listen(3333);