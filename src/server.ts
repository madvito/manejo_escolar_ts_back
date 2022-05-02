import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const serverStart = () => {
    const app = express();
    const PORT: number = Number(process.env.PORT);
    app.get('/', (req,res) => res.send('Hello World'))

    app.listen(PORT, () => console.log(`server listening on localhost:${PORT}`))
}

export default serverStart;