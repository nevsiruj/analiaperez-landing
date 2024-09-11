// src/services/apiService.js

const API_BASE_URL = 'http://localhost:5000'; // Cambia esto a la URL de tu API

// Función para manejar las respuestas de la API
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error en la solicitud');
  }
  return response.json();
};

// Obtener todas las clases
export const getClases = async () => {
  const response = await fetch(`${API_BASE_URL}/clases`);
  return handleResponse(response);
};

// Añadir una nueva clase
export const addClase = async (clase) => {
  const response = await fetch(`${API_BASE_URL}/clases`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clase),
  });
  return handleResponse(response);
};

// Eliminar una clase por ID
export const deleteClase = async (id) => {
  const response = await fetch(`${API_BASE_URL}/clases/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

// Obtener todos los usuarios
export const getUsuarios = async () => {
  const response = await fetch(`${API_BASE_URL}/usuarios`);
  return handleResponse(response);
};

// Añadir un nuevo usuario
export const addUsuario = async (usuario) => {
  const response = await fetch(`${API_BASE_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });
  return handleResponse(response);
};

// Eliminar un usuario por ID
export const deleteUsuario = async (id) => {
  const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};
