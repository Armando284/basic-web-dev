const btnAceptar = document.querySelector('.btn_aceptar');
const btnBorra = document.querySelector('.btn_borra');
const input = document.querySelector('.input_leftside');
const cardR = document.querySelector('#cardRight_Text');
const mensajeEror = document.querySelector('.msnError')
const cardList = document.querySelector('.cardList')

const MostrarLista = [];

btnAceptar.addEventListener('click', acepta)
btnBorra.addEventListener('click', borra)



function acepta () {
    if (input.value === '') {
        mensajeEror.textContent = ('Usted debe Escribir una informacion');
    } else {
        cardR.textContent = input.value;
        /*const newText = document.createElement("li");
        const cardR = document.createElement("li");
        cardR.textContent = input.value;
        const cardText = document.querySelector('.cardText');
        cardText.appendChild(cardR);*/
    }    
}

/*function addNewElement (acepta) {
    MostrarLista.push(acepta)
}*/

function borra () {
    input.value = ""
    cardR.textContent = ""
    mensajeEror.textContent = ""
}