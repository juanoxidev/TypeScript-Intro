import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeAxiosAdapter, PokeFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {

      // inyeccion de dependencias.
     const data  = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
       
      console.log(data.moves);
        
        return data.moves;
    }

}

// elegimos de que forma va abtener los movimientos de ese pokemon.
const pokeApi = new PokeAxiosAdapter();
const pokeApi2 = new PokeFetchAdapter();

// inyectamos la forma en el constructor
export const charmander = new Pokemon(4, 'Charmander', pokeApi);

charmander.getMoves();