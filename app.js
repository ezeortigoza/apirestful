import express from 'express';
import productsRouter from './routes/products.router.js'

let app = express();

const server = app.listen(8080,()=>console.log('Listening port 8080'));

app.use(express.json());
app.use('/products',productsRouter);
app.use(express.static('public'));


