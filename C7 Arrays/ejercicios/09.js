function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if(array.length === 0){
      return undefined;
   }

   var indiceALeatorio = Math.floor(Math.random() * array.length);

   return array[indiceALeatorio];
}

module.exports = obtenerElementoAleatorio;
