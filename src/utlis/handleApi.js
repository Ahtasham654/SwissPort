import axios from 'axios';

export const handleApi = axios.create({
  baseURL: 'https://dimgrey-hornet-448084.hostingersite.com/api/v1/',
  headerds: {'Content-Type': 'application/json'},
});
