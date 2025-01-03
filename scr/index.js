const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Entrou na rota get /');
    res.send('App ' + ' - GET!'); 

});

app.post('/', (req, res) => {
    console.log('Entrou na rota post /');
    res.send('App - POST!');
}
);

app.delete('/', (req, res) => {
    console.log('Entrou na rota delete /');
    res.send('App - DELETE!');
});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});