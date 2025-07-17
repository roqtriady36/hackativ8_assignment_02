import express, { Application } from 'express';

import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dbProduct from './infrastructure/db';
import fakestoreProductModule from './shared/fakestore.product.module';
import productRouter from './presentation/product.router';

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.dbSync();
        this.plugins();
        this.routes();
        this.runFetchSave()
    };

    protected dbSync(): void {
        dbProduct.authenticate()
        dbProduct.sync({alter: true})
    }

    protected async runFetchSave(): Promise<void> {
        await fakestoreProductModule.fetchSave()
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(compression());
        this.app.use(cors());
    };

    protected routes(): void {        
        this.app.use('/products', productRouter);
    };

}

const port: number = Number(process.env.SERVICE_PORT_PRODUCT || 3000);
const app = new App().app;

app.listen(port, () => {
    console.log(`Service PRODUCT running http://localhost:${port}`);
})

export default app;