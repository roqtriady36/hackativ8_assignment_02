import axios, { AxiosInstance } from 'axios';
import configDotEnv from '../../helper/dotenv.config';

const API_PRODUCT_SERVICE = (): AxiosInstance => {    
    return axios.create({
        baseURL: `${configDotEnv('APP_HOST')}:${configDotEnv('SERVICE_PORT_PRODUCT')}`,
    });
}

export default API_PRODUCT_SERVICE;