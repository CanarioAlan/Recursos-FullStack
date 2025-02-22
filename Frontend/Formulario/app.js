document.addEventListener("DOMContentLoaded", function () {
  //creando un objeto con los campos del formulario
  const email = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: "",
  };
  //asginando las variables
  const inputNombre = document.querySelector("#nombre");
  const inputApellido = document.querySelector("#apellido");
  const inputCorreo = document.querySelector("#correo");
  const inputTelefono = document.querySelector("#telefono");
  const inputMensaje = document.querySelector("#mensaje");
  const btnSubmit = document.querySelector("#enviar");
  const spinner = document.querySelector("#spinner");
  const formulario = document.querySelector("#formulario");
  //asignado eventos
  inputNombre.addEventListener("blur", validar);
  inputNombre.addEventListener("input", validar);
  inputApellido.addEventListener("blur", validar);
  inputApellido.addEventListener("input", validar);
  inputCorreo.addEventListener("blur", validar);
  inputCorreo.addEventListener("input", validar);
  inputTelefono.addEventListener("blur", validar);
  inputTelefono.addEventListener("input", validar);
  inputMensaje.addEventListener("blur", validar);
  inputMensaje.addEventListener("input", validar);
  btnSubmit.addEventListener("click", enviarEmail);
  //enviar email
  function enviarEmail(e) {
    //evitamos que haga la accion por defecto
    e.preventDefault();
    //mostramos el spinner
    spinner.classList.remove("hidden");
    //simulamos un tiempo de espera
    setTimeout(() => {
      //ocultamos el spinner
      spinner.classList.add("hidden");
      //reseteamos el formulario
      resetFormulario();
      //creamos una referencia al parrafo que indica que el correo fue enviado correctamente
      const envio = envioCorrecto();
      //simulamos un tiempo de espera y eliminamos el parrafo
      setTimeout(() => {
        envio.remove();
      }, 3000);
    }, 3000);
  }
  //comprobar campos
  function validar(e) {
    // trim se utiliza para eliminar espacios en blanco
    if (e.target.value.trim() === "") {
      //llamamos la funcion crearAlerta y le pasamos el mensaje y la referencia al padre del input
      crearAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      //reiniciamos el objeto email
      email[e.target.name] = "";
      //llamamos la funcion habilitarBtn
      habilitarBtn();
      //usamos return para evitar que se siga ejecutando
      return;
    }
    if (e.target.id === "correo" && !verificarEmail(e.target.value)) {
      //llamamos la funcion crearAlerta y le pasamos el mensaje y la referencia al padre del input
      crearAlerta(`El ${e.target.id} no es valido`, e.target.parentElement);
      //reiniciamos el objeto email
      email[e.target.name] = "";
      //llamamos la funcion habilitarBtn
      habilitarBtn();
      //usamos return para evitar que se siga ejecutando
      return;
    }
    //limpiamos el alerta y le pasamos la referencia al padre del input
    limpiarAlerta(e.target.parentElement);
    //guardamos el valor del campo en el objeto email (usamos trim para eliminar espacios en blanco y toLowerCase para convertir el texto en minusculas)
    email[e.target.name] = e.target.value.trim().toLowerCase();
    //llamamos la funcion habilitarBtn
    habilitarBtn();
  }
  //Crear alerta -- Creamos un parrafo y le agregamos los estiloss
  function crearAlerta(mensaje, referencia) {
    //limpiamos el alerta para que no se repita
    limpiarAlerta(referencia);
    //cremaos un parrafo
    const alerta = document.createElement("P");
    //le asignamos un texto
    alerta.textContent = mensaje;
    //le asignamos una clase
    alerta.classList.add("alerta");
    //agregamos la alerta al html
    referencia.appendChild(alerta);
  }
  //ferificar el Email valido
  function verificarEmail(correo) {
    //creamos una expresion regular para validar el email
    //usamos test para verificar si el email es valido ( el test busca ocurrencias en la cadena y devuelve true o false)
    const expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //guardamos el resultado de la expresion regular
    const resultado = expresion.test(correo);
    //retornamos el resultado
    return resultado;
  }
  //limpiamos el alerta cuando este correcto
  function limpiarAlerta(referencia) {
    //cremos una variable alerta que busca la clase alerta
    const alerta = referencia.querySelector(".alerta");
    //verificamos si existe la alerta
    if (alerta) {
      //si existe la eliminamos
      alerta.remove();
    }
  }
  //avilitar boton
  function habilitarBtn() {
    //verificamos si algun campo del objeto email esta vacio
    if (Object.values(email).includes("")) {
      //deshabilitamos el boton
      btnSubmit.disabled = true;
      btnSubmit.classList.add("opacity");
      //usamos return para evitar que se siga ejecutando
      return;
    }
    //habilitamos el boton
    btnSubmit.disabled = false;
    btnSubmit.classList.remove("opacity");
  }
  //resetemos el formulario
  function resetFormulario() {
    //usamos el metodo reset para limpiar los campos del formulario
    formulario.reset();
    //reseteamos el objeto email
    email.nombre = "";
    email.apellido = "";
    email.correo = "";
    email.telefono = "";
    email.mensaje = "";
  }
  // creamos un parrafo para indicar que el correo fue enviado correctamente
  function envioCorrecto() {
    //creamos un parrafo
    const envio = document.createElement("P");
    //le asignamos un texto
    envio.textContent = "Email enviado correctamente";
    //le asignamos una clase
    envio.classList.add("correo-enviado");
    //agregamos el parrafo al formulario
    formulario.appendChild(envio);
    //retornamos el parrafo
    return envio;
  }
});
