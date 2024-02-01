const app = require('express')();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});