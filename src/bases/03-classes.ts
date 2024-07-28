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
  
  constructor(public readonly id: number, public name: string) {}
  

}

export const charmander = new Pokemon(4, 'Charmander')