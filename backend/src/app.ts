import express from 'express';
import dotenv from "dotenv"

//variables
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});