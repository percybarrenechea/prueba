import axios from 'axios';

const apiClient = axios.create({
    baseURL: '[https://fakestoreapi.com](https://fakestoreapi.com)',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        let message = 'Ocurrió un error inesperado';
        
        if (error.response) {
            // El servidor respondió con un status fuera del rango 2xx
            const status = error.response.status;
            if (status === 404) message = 'Recurso no encontrado (404)';
            else if (status >= 500) message = 'Error interno del servidor (500)';
            else message = `Error en la solicitud (${status})`;
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            message = 'No se pudo establecer conexión con el servidor (Error de red)';
        } else {
            // Error al configurar la solicitud
            message = error.message;
        }

        return Promise.reject({ ...error, customMessage: message });
    }
);

export default apiClient;