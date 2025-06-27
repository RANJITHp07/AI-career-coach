import express from 'express';
import dotenv from "dotenv"
import appRouter from './routes';

//variables
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//routes
app.use("/api", appRouter)

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});