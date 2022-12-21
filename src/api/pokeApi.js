import axios from 'axios';
import { getEnvVariable } from '../helpers/getEnvVariable';

const { POKE_API_URL } = getEnvVariable();

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default pokeApi;