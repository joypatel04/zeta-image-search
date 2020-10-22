import axios from 'axios';
import {googleImages} from './googleImages';

export const createClient = ({
  baseURL = required(
    'baseURL is a required parameter to create the http client',
  ),
  timeout = 0,
} = {}) => {
  const instance = createInstance(baseURL, timeout);

  const factories = [googleImages];

  const client = factories.reduce((c, fac) => {
    const funcs = fac(instance);
    Object.keys(funcs).forEach((name) => {
      if (
        process.env.NODE_ENV !== 'production' &&
        typeof c[name] !== 'undefined'
      ) {
        throw new Error(
          `Factory ${fac.name} defines duplicate method '${name}'`,
        );
      } else {
        c[name] = funcs[name];
      }
    });
    return c;
  }, {});

  return client;
};

const required = (msg) => {
  throw new Error(msg);
};

export const createInstance = (baseURL, timeout) => {
  const instance = axios.create({
    baseURL,
    timeout,
    withCredentials: true,
  });

  return instance;
};
