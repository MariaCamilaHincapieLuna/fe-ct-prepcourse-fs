function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var numMayor = array[0];
  var indiceMayor = 0;
  for(let i = 1; i < array.length; i++){
    if(array[i] > numMayor) {
      numMayor = array[i]
      indiceMayor = i;
    }
  }
  return indiceMayor
}

module.exports = encontrarIndiceMayor;
