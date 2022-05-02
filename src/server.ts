import express from 'express';


// const serverStart = () => {
    const app = express();
    
    app.get('/', (req,res) => res.send('Hello World'))

    // app.listen(PORT, () => console.log(`server listening on localhost:${PORT}`))
    // return app;
// }

export default app;