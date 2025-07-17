import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types/sequelize';
import OrderModel from './model/order.model';
import configDotEnv from '../../helper/dotenv.config';

const db = new Sequelize({
    database: configDotEnv('DB_NAME') as string,
    username: configDotEnv('DB_USER') as string,
    password: configDotEnv('DB_PASSWORD') as string,
    host: configDotEnv('DB_HOST') as string,
    dialect: configDotEnv('DB_DIALECT') as Dialect,
    port: Number(configDotEnv('DB_PORT')) as number,
    logging: false,
    models: [
        OrderModel,
    ],    
});

export default db;