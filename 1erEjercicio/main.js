const btnAceptar = document.querySelector('.btn_aceptar');
const input = document.querySelector('.input_leftside');
const cardR = document.querySelector('#cardRight_Text');
const mensajeEror = document.querySelector('.msnError')

btnAceptar.addEventListener('click', acepta)



function acepta () {
    if (input.value === '') {
        mensajeEror.textContent = ('Ustede debe Escribir una informacion');
    } else {
        cardR.textContent = input.value
    }    
}