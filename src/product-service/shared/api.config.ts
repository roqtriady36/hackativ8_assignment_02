import axios, { AxiosInstance } from 'axios';
import configDotEnv from '../../helper/dotenv.config';

const API_FAKESTORE = (route: string): AxiosInstance => {    
    return axios.create({
        baseURL: `${configDotEnv('URL_FAKESTORE')}/${route}`,
    });
}

export default API_FAKESTORE;