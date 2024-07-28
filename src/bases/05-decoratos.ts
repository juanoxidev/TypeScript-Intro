class NewPokemon {
    constructor(
    public readonly id: number,
    public name: string,
  ) { }
  
    scream() {
        console.log('NO QUIERO!!!');
    }

    speak() {
        console.log('NO QUIERO HABLAR');
    }

}


const MyDecorator = () => {

  // retorna una funcion, tengo la referencia al target, a la clase al va a poder modificar, extender. Puede redefinir la clase.
  return (target: Function) => {
    //console.log(target)
    // estamos sobrescribiendo la creacion de la clase.
    return NewPokemon;
  }
}

//  Los decoradores/anotaciones son simples funciones, en ts se activan en el tsconfig.json  "experimentalDecorators": true,
@MyDecorator()
export class Pokemon {
  
  constructor(
    public readonly id: number,
    public name: string,
  ) { }
  
    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }
    
}


export const charmander = new Pokemon(4, 'charmander')

charmander.scream();
charmander.speak();

