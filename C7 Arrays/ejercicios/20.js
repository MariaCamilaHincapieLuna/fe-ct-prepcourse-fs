function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if(array.length === 0) return true;

  var primerElemento = array[0];

  return array.every(elemento => elemento === primerElemento);
}

module.exports = todosIguales;
