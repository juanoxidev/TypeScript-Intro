export const pokemonIds = [1, 20, 30, 66];

//Las constantes ya definen el tipo al llenarlas con valores que no pueddn ser modificaods, se puede o no indicar el tipo. 
pokemonIds.push('Juan');
// convertir string a number
pokemonIds.push(+'1');
// string 
pokemonIds.push('1');

// Si hacemos console log de pokemons id luego del push va a agregar a pokemonsIds el texto Juan. Eso paaa porque tyscript a pesar de ser tipado nos esta advirtiendo que el string juan no deberia estar siendo pusheado en pokemonsIds, pero a la hora de ejecutar el codigo transforma esa variable a javascript donde es valido.

console.log(pokemonIds);

// Objetos Literales
// Con los objetos literales no podemso definir su estructura y luego validarla.
export const pokemon = {
  id: 1,
  name: 'bulbasour',
}

console.log(pokemon)

// Es por ello que se usan las interfaces para definir los atributos que debe tener ese objeto

interface Pokemon {
  id: number,
  name: string,
  age?: number, // definimos que el age es opcional.
}

// pokemon definido de tipo pokemon con sus atributos y tipos
export const pokemonDefinido: Pokemon = {
  id: 1,
  name: 'bulbasour',
}

console.log(pokemonDefinido)

// no dejara hacer el pokemon con id String por ej

export const pokemonDefinido2: Pokemon = {
  id: '2',
  name: 'bulbasour',
}


export const pokemonDefinido3: Pokemon = {
  id: 2,
  name: 'bulbasour',
  age:25
}

export const pokemons: Pokemon[] = []

pokemons.push(pokemonDefinido3, pokemonDefinido)
console.log(pokemons)