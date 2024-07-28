// voy a agarrar una aplicacion de 3eros y la voy a adaptar a mi codigo se recomienda ahcerlo cuando se trabaja con libreria de 3eros. Sirve de puente entre el paquete de 3eros y mi codigo.

import axios from "axios";


export class PokeApiAdapter{

  private readonly axios = axios;

  async get(url: string) {
    const { data } = await this.axios.get(url);
    return data;
  }

  
  async post(url: string, data: any) { }
  
  
  async patch(url: string, data: any) { }
  
  
  async delete(url: string) { }
  
}