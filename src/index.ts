import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import productService from './product-service';
import orderService from './order-service';

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.serviceApp();
    };

    protected plugins(): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        
    };

    protected serviceApp(): void {        
        this.app.use('/api', productService)
        this.app.use('/api', orderService)
    };

}

dotenv.config();
const port: number = Number(process.env.APP_PORT || 3000);
const app = new App().app;

app.listen(port, () => {
    console.log(`Server APP running http://localhost:${port}`);
})