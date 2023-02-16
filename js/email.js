/*validacao do email*/
function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if(!email.checkValidity()){
        error.innerHTML = "Email inválido";
    }
}

function redefinirMsg(){
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email inválido"){
        error.innerHTML = "";
    }
}