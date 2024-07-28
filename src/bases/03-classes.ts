import axios from 'axios'
import { PokeapiResponse, Move } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
  

  /*
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    console.log('constructor llamado')
  }

  */
  
  /* forma abreviada de hacer  el constructor y la declaracion de atributos
  readonly hace que no se puedan cambiar los atributos de esa clase. Es importante que el id no se pueda cambiar.
  */
  
  constructor(public readonly id: number, public name: string) { }
  
  // getters

// uso de palabra reservada get paraindicar que es un getter
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }
  
  // metodos de la clase por defecto todo lo q definimos en la clase es publico
 public scream(): void  {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  // se puede o no indicar que es void
public speak(): void {
  console.log(this.speakContent())
  }

  // solo se accede desde la clase.
  private speakContent(): string {
    return `${this.name}, ${this.name}`
  }
    
    // metodo asincrono que regresa una promesa: Es devolver lo que estamos indicando que va a devolver. Tiene un estado y un resultado.
  
  async getMoves(): Promise<Move[]> {
    // dentro de una funcion o metodo asincrono, espera a que esta promesa se resuelva y lo que sea que reseuelva lo asigna a la resp.
    // desestructuracion de la respuesta de la api, saca la data de la resp.
    // 
    const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

    // typescript no sabe que tipo de dato es el de data.moves, data puede ser del tipo any.Podemos tipar la respuesta de axios al agregarle un tipo entre los <> axios.get<>
    
    console.log(data.moves);
    return data.moves;
  }
    
}

//construccion de un objeto de clase Pokemon
export const charmander = new Pokemon(4, 'Charmander')
// como se accede al getter
console.log(charmander.imageUrl)
// uso del metodo
charmander.speak()
charmander.scream()
charmander.getMoves()