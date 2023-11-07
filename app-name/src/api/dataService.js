import axios from 'axios';

// Definición de la URL base para las solicitudes al servidor.
const BASE_URL = 'http://localhost:8080';

// Función asincrónica para recuperar grupos desde el servidor.
export const fetchGroups = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
    return axios.get(`${BASE_URL}/groups`)
}
// Función asincrónica para recuperar personas desde el servidor.
export const fetchPersons = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de personas.
    return axios.get(`${BASE_URL}/persons`)
}