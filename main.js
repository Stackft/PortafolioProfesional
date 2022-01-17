'use strict'
function maquina(contenedor,texto,intervalo){
    let longitud = texto.length;
    let cnt = document.getElementById(contenedor);
    let i=0;
    const timer = setInterval(function(){
       cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
       // Si hemos llegado al final del texto..
       if(i >= longitud){
          // Salimos del Timer y quitamos la barra baja (_)
          clearInterval(timer);
          cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
          return true;
       } else {
          // En caso contrario.. seguimos
          i++;
       }},intervalo);
 };
 
 let texto = "Mauricio Soto";
 let texto2 = "Desarrollador"
 // 100 es el intervalo de minisegundos en el que se escribirá cada letra.
 maquina("maquinas",texto,150);

 setTimeout(() => {
   maquina("maquinas2",texto2,150);
 },2000);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
}
