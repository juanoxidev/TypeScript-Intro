/* 
- Definicion de tipos

Cuando hacemos una exportacion hace la configuracion de modulos en nest,y esa constante podemos usarla en cualquier archivo del proyecto. Tambien peudo configurar exportacion por defecto

A esto se le llama modulo, en lo posible lo mejor es no tener codigo que se ejecute en estos archivos. Solo la definicion de lo que se va a exportar. Lo que se exporta es el archivo y si tiene codigo se va a ejecutar cuando se exporte y use una variable en otros archivos.

*/
export const name: string = 'Juan'
export const age: number = 35
export const isValid: boolean = true