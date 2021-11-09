const btnAceptar = document.querySelector('.btn_aceptar');
const input = document.querySelector('.input_leftside');
const cardR = document.querySelector('#cardRight_Text');
const mensajeEror = document.querySelector('.msnError')

const array = [];

btnAceptar.addEventListener('click', acepta)



function acepta () {
    if (input.value === '') {
        mensajeEror.textContent = ('Ustede debe Escribir una informacion');
    } else {
        const text = input.value;

        const li = document.createElement('li');
        li.textContent = text;

        cardR.appendChild(li);
        li.style.listStyle = 'none'
        li.style.marginLeft = '10px'

        array.push(input.value);
    }    
}

function borra () {
    cardR.textContent = ""
    input.value = ""
    mensajeEror.textContent = ""
}