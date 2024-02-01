const app = require('express')();

app.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});