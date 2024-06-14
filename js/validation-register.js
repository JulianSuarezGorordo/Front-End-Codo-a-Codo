// //TIPO DE SELECTORES PARA MANIPULAR EL DOM
// const form = document.getElementById('formRegister');
// // console.log(form);

// //POR CLASE[]
// const formControls = document.getElementsByClassName('form-control');
// // console.log(formControls);

// //POR ATRIBUTO NAME[]
// const selectCountry = document.getElementsByName('country');
// // console.log(selectCountry);

// //POR TAG
// const inputs = document.getElementsByTagName('input');
// // console.log(inputs);

// //QuerySelector
// const inputNew = document.querySelector('input');
// // console.log(inputNew);

// const inputList = document.querySelectorAll('.form-control');
// // console.log(inputList);

// // CREAR ELEMENTOS HTML
// const formRegister = document.querySelector('#formRegister');

// //EVENTOS HTML CON JS

// const validarFormulario = (event) => {
//     event.preventDefault();
//     const firstname =document.querySelector('#firstname');
//     const lastname = document.querySelector('#lastname');
//     const email = document.querySelector('#email');
//     const birthdate = document.querySelector('#birthdate');
//     enviarFormulario()

//     let validation = true;
//     let condicion = true;

//     if(firstname.value===''){
//         console.error ('error');
//         const divError = document.querySelector('#error-firstname');
//         divError.textContent = 'El nombre no puede ser vacio';
//         validation=false;
//         condicion=false;
//     }
//     if(lastname.value===''){
//         console.error ('error');
//         const divError = document.querySelector('#error-lastname');
//         divError.textContent =('El apellido no puede ser vacio.');
//         validation=false; 
//         condicion=false;
//     }
//     if(email.value===''){
//         console.error ('error');
//         const divError = document.querySelector('#error-email');
//         divError.textContent =('Completar el mail');
//         validation=false; 
//         condicion=false;
//     }
//         if(password.value===''){
//             console.error ('error');
//             const divError = document.querySelector('#error-password');
//             divError.textContent =('Completar contraseña');
//             validation=false; 
//             condicion=false;
//         }

//         if(!terms.checked){
//             console.error ('error');
//             const divError = document.querySelector('#error-terms');
//             divError.textContent =('Aceptar');
//             validation=false; 
//             condicion=true;
//         }

//         if(validation){
//         let data = {
//             'firstname': firstname.value,
//             'lastname': lastname.value,
//             'email': email.value,
//             'password': password.value,
//             'terms': terms.value
//                     }
//         localStorage.setItem('user',JSON.stringify(data));

//     }
//     else{
//         return false;
//     }
// }


// formRegister.addEventListener('submit', validarFormulario, enviarFormulario);

// function enviarFormulario ()
// { form.reset();
//     form.lastElementChild.innerHTML = "Información enviada";
// }



const nombre = document.getElementById("firstname");
const apellido = document.getElementById("lastname");
const correo = document.getElementById("email");
const contrasenia = document.getElementById("password");
const terminosYcondiciones = document.getElementById("terms");
const form = document.getElementById("formRegister");
const inputList = document.querySelectorAll(".form-control");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
 });

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    inputList.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });
  

    if (nombre.value.length < 1 || nombre.value.trim() =="") {
        mostrarMensajeError("firstname", "Nombre no válido*");
        condicion = false;
    }

    if (apellido.value.length < 1 || apellido.value.trim() =="") {
        mostrarMensajeError("lastname", "Apellido no válido*");
        condicion = false;
    }

    if (correo.value.length < 1 || correo.value.trim() =="") {
        mostrarMensajeError("email", "Correo no válido*");
        condicion = false;
    }
    if (contrasenia.value.length < 1 || contrasenia.value.trim() =="") {
        mostrarMensajeError("password", "Contraseña no válido*");
        condicion = false;
    }
    if (!terminosYcondiciones.checked) {
        mostrarMensajeError("terms", "Acepte*");
        condicion = false;
    } else {
        mostrarMensajeError("terms", "");
    }
        return condicion;
}

    function mostrarMensajeError(claseInput, mensaje) {
        let elemento = document.querySelector(`.${claseInput}`);
        elemento.lastElementChild.innerHTML = mensaje;
    }

    function enviarFormulario()
   {
    form.reset();
    form.lastElementChild.innerHTML = "Información enviado";
   } 







