"use strict";
function random(){
let codigoRandom = Math.floor(Math.random() * 999)+1;
let codigo = document.querySelector("#numeroRandom");
codigo.innerHTML = codigoRandom;
}
random();

let form = document.querySelector("#form");
form.addEventListener('submit', mostrarResultado);

function mostrarResultado(e, codigoRandom) { 
e.preventDefault();
let formData = new FormData(form);
let codigoIngresado = formData.get("captcha");
codigoRandom = Number(document.querySelector("#numeroRandom").innerHTML);

let resultado = document.querySelector("#resultado");
  if(Number(codigoIngresado)===codigoRandom){
    let usuario = formData.get("user");
    let email = formData.get("email");
    resultado.innerHTML = "CODIGO CORRECTO";
    console.log(usuario, email)
 }else{
    resultado.innerHTML = "CODIGO INCORRECTO";
  }
form.reset();
random();
  }
