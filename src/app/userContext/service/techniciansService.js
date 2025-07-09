import axios from 'axios';

const API = `https://tuchamba-pe-backend-full-1.fly.dev/api/v1/workers`;

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
