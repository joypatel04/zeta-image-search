export const environment = 'staging';

export const GOOGLE_API_KEY = {
  development: 'AIzaSyAjTPFgulkdrELcWmo1jAa8wqtHLrztyKc',
  staging: 'AIzaSyAjTPFgulkdrELcWmo1jAa8wqtHLrztyKc',
  production: 'AIzaSyAjTPFgulkdrELcWmo1jAa8wqtHLrztyKc',
};

export const GOOGLE_CX = {
  development: '011476162607576381860:ra4vmliv9ti',
  staging: '011476162607576381860:ra4vmliv9ti',
  production: '011476162607576381860:ra4vmliv9ti',
};

const config = {
  GOOGLE_API_KEY: GOOGLE_API_KEY[environment],
};

export default config;
