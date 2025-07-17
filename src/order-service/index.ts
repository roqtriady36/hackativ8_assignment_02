import express, { Application } from 'express';

import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import db from './infrastructure/db';
import orderRouter from './presentation/order.router';

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.dbSync();
        this.plugins();
        this.routes();
    };

    protected dbSync(): void {
        db.authenticate()
        db.sync({alter: true})
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(compression());
        this.app.use(cors());
    };

    protected routes(): void {        
        this.app.use('/order', orderRouter);
    };

}

const port: number = Number(process.env.SERVICE_PORT_ORDER || 3000);
const app = new App().app;

app.listen(port, () => {
    console.log(`Service ORDER running http://localhost:${port}`);
})

export default app;