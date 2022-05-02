import app from "./server";
import dotenv from 'dotenv';
dotenv.config();

// const app = serverStart();
const PORT: number = Number(process.env.PORT);
app.listen(PORT, () => console.log(`server listening on localhost:${PORT}`))