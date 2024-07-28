// voy a agarrar una aplicacion de 3eros y la voy a adaptar a mi codigo se recomienda ahcerlo cuando se trabaja con libreria de 3eros. Sirve de puente entre el paquete de 3eros y mi codigo.

import axios from "axios";

export interface HttpAdapter{
  
  get<T>(url: string): Promise<T>;

}


export class PokeFetchAdapter implements HttpAdapter {


  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data;
  }

  
  async post(url: string, data: any) { }
  
  
  async patch(url: string, data: any) { }
  
  
  async delete(url: string) { }
  
}

export class PokeAxiosAdapter implements HttpAdapter {

  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  
  async post(url: string, data: any) { }
  
  
  async patch(url: string, data: any) { }
  
  
  async delete(url: string) { }
  
}