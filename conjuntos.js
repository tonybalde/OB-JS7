//  Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia - Ok

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo) - OK

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) - OK


const arFlia = ["Juan", "Pedro", "Maria", "Nora"];

let nombreFamilia = new Set(arFlia) ;

nombreFamilia.add("Pedro");

nombreFamilia.add("JavaScript");

console.log(nombreFamilia);

