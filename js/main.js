// let previsualizacion = document.querySelector('.previsualizacion');
// document.querySelector('.boton').addEventListener('click',
// function() {
//     previsualizacion.classList.toggle('active')
// });
let botones = document.querySelectorAll('.boton')
let previsualizacion = document.querySelector('.previsualizacion');
botones.forEach(function (button) {
    button.addEventListener('click', function () {
        previsualizacion.classList.add('active');
    });
});
