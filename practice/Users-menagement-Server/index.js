const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());

const users = [
    { id: 1, name: 'seber', email: 'seber@gmail.com' },
    { id: 2, name: 'abcd', email: 'abcd@gmail.com' },
    { id: 3, name: 'kkkkkk', email: 'kkkkk@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('Users Management Server is running')
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
});