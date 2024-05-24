import express from 'express';
import { ProductRoutes } from './modules/Products.route';

const app = express();

app.use(express.json());

app.use('/api/products', ProductRoutes.router);
app.use('/api/orders', ProductRoutes.orderRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;
