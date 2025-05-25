// @ts-ignore
import webAppConfig from '../config/webAppConfig.json';

const baseURL = webAppConfig.baseURL;
if (!baseURL) {
    throw new Error('baseURL is not defined in config');
}

export default baseURL;