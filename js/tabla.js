"use strict";
document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnAgregar3").addEventListener("click", agregar3);
document.querySelector("#btnVaciar").addEventListener("click", vaciarTabla);

const guitars = [{
    marca : "Fender",
    tipo : "Telecaster",
    presupuesto : 1300
}];

let tabla = document.querySelector("#cuerpo_tabla");
let formulario = document.querySelector("#formulario");

function agregar(){
    let formData = new FormData(formulario);
    let marca = formData.get('marca');
    let tipo = formData.get('tipo');
    let presupuesto = formData.get('presupuesto');
  
    guitars.push({
        marca : marca , 
        tipo : tipo , 
        presupuesto: Number(presupuesto) ,
      });
      mostrarTabla();
}
function agregar3(){
    for (let i = 0; i < 3; i++) {
        agregar();
    }
}
function vaciarTabla(){
    tabla.innerHTML = "";
} 
function mostrarTodo(){
    
    guitars.forEach((guitar) => {
        tabla.innerHTML += `
        
<td>${guitar.marca}</td>
<td>${guitar.tipo}</td>
<td>${guitar.presupuesto}</td>
</tr>
        `
    });
}
function mostrarTabla(){    
    tabla.innerHTML += `
<tr>
<td>${guitars[guitars.length-1].marca}</td>
<td>${guitars[guitars.length-1].tipo}</td>
<td>${guitars[guitars.length-1].presupuesto}</td>
</tr>
 `
    }
mostrarTodo();