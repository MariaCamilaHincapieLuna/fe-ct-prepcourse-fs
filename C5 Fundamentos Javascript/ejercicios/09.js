function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  return(typeof valor === "String" && valor.length === 0 || valor === null || valor === undefined)
}

module.exports = esNuloOIndefinido;