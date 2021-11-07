const btnAceptar = document.querySelector('.btn_aceptar');
const input = document.querySelector('.input_leftside');
const cardR = document.querySelector('#cardRight_Text');


btnAceptar.addEventListener('click', acepta)

function acepta () {
    cardR.textContent = input.value
}

