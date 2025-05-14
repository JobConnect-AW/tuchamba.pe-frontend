import axios from "axios";

const API_URL = "http://localhost:5000/tecnicos";

export const tecnicosService = {
  async getTecnicos() {
    try {
      const response = await axios.get(API_URL);
      console.log("Datos obtenidos del servidor:", response.data); // Verificamos los datos
      return response.data; // Retornamos los datos de los técnicos
    } catch (error) {
      console.error("Error al obtener los técnicos:", error);
      return [];
    }
  },
};
