let botones = document.querySelectorAll('.boton')
let previsualizacion = document.querySelector('.previsualizacion');
let cuenta = document.querySelector('.cuenta');
let cerrarCuenta = document.querySelector('.cuenta');
let cerrar = document.querySelector('.previsualizacion');
botones.forEach(function (button) {
    button.addEventListener('click', function () {
        previsualizacion.classList.add('active');
    });
});
document.querySelector('.x').addEventListener('click',
function() {
    cerrar.classList.toggle('active')
 }); 
document.querySelector('.carrito').addEventListener('click',
function() {
    cuenta.classList.toggle('active')
 }); 
 document.querySelector('.xCuenta').addEventListener('click',
 function() {
    cerrarCuenta.classList.toggle('active')
  }); 