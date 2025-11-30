import axios from 'axios';
import { APIConfiguration } from '@/config/api.config';

const apiInstance = axios.create({
  baseURL: APIConfiguration.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiInstance;
