"use strict";
document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnAgregar3").addEventListener("click", agregar3);
document.querySelector("#btnVaciar").addEventListener("click", vaciarTabla);

let guitars = [
  {
    marca: "Fender",
    tipo: "Telecaster",
    presupuesto: 1300,
  },
];

let tabla = document.querySelector("#cuerpo_tabla");
let formularioo = document.querySelector("#formulario");

function agregar() {
  let formData = new FormData(formulario);
  let marca = formData.get("marca");
  let tipo = formData.get("tipo");
  let presupuesto = formData.get("presupuesto");

  guitars.push({
    marca: marca,
    tipo: tipo,
    presupuesto: Number(presupuesto),
  });
  mostrarTabla();
}

function agregar3() {
  for (let i = 0; i < 3; i++) {
    agregar();
  }
}

function vaciarTabla() {
  tabla.innerHTML = "";
  guitars = [];
}

function mostrarTabla() {
  tabla.innerHTML += `
<tr>
<td>${guitars[guitars.length - 1].marca}</td>
<td>${guitars[guitars.length - 1].tipo}</td>
<td>${guitars[guitars.length - 1].presupuesto}</td>
</tr>
 `;
  colorPrecio();
}

function colorPrecio() {
  // si el presupuesto excede los $1000, se mostrará de color rojo. Si es menor a $400, se mostrará verde.
  let filas = tabla.querySelectorAll("tr");
  filas.forEach((fila, index) => {
    if (guitars[index].presupuesto > 1000) {
      fila.classList.add("colorExpensive");
    }
    if (guitars[index].presupuesto < 400) {
      fila.classList.add("colorCheap");
    }
  });
}

mostrarTabla();
