import express from 'express';
import dotenv from "dotenv"
import morgan from 'morgan';
import appRouter from './routes';
import { signUpWebhook } from './lib/webhook';

//variables
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}

app.post('/webhook', (req, res) => {
    const event = req.body;

    console.log('✅ Webhook Received:', event);
    if (event.type === 'user.created') {
        signUpWebhook(event)
    }
});

//health check
app.get('/health', (req, res) => {
    res.send('Health check');
});

//routes
app.use("/api", appRouter)

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});