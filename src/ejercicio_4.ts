let nombres: string[] = new Array(2);
let numeros: number[] = new Array(3);
let nombre: string;

for (let indice = 0; indice < nombres.length; indice++) {
  nombre = prompt("Ingrese el nombre " + (indice + 1));
  nombre = nombre.toUpperCase();
  nombres[indice] = nombre;
}

for (let indice = 0; indice < numeros.length; indice++) {
  numeros[indice] = Number(prompt("Ingrese el número " + (indice + 1)));
}

console.log("Los nombres ingresados");
for (let indice = 0; indice < nombres.length; indice++) {
  console.log(nombres[indice]);
}

console.log("Los números ingresados");
for (let indice = 0; indice < numeros.length; indice++) {
  console.log(numeros[indice]);
}
