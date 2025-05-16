import axios from 'axios';

const API = 'http://localhost:5000/technicians';

export const techniciansService = {
  /** Devuelve un array de técnicos */
  async getAll() {
    try {
      const { data } = await axios.get(API);
      return data;
    } catch (err) {
      console.error('techniciansService →', err);
      return [];
    }
  }
};
