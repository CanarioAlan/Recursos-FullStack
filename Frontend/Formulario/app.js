document.addEventListener("DOMContentLoaded", function () {
  //creando un objeto con los campos del formulario
  const email = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  };
  //asginando las variables
  const inputNombre = document.querySelector("#nombre");
  const inputApellido = document.querySelector("#apellido");
  const inputemail = document.querySelector("#correo");
  const inputTelefono = document.querySelector("#telefono");
  const inputMensaje = document.querySelector("#mensaje");
  const btnSubmit = document.querySelector("#enviar");
  //asignar evento
  inputNombre.addEventListener("blur", validar);
  inputApellido.addEventListener("input", validar);
  inputemail.addEventListener("input", validar);
  inputTelefono.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);
  btnSubmit.addEventListener("click", enviarEmail);
  //comprbar campos
  function enviarEmail(e) {}
  function validar(e) {
    // trim se utiliza para eliminar espacios en blanco
    if (e.target.value.trim() == "") {
      crearAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      habilitarBtn();
    }
  }
  //Crear alerta -- Creamos un parrafo y le agregamos los estiloss
  function crearAlerta(mensaje, referencia) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    alerta.classList.add("alerta");
    eliminarAlerta(referencia);

    referencia.appendChild(alerta);
  }
  //Verificamos si existe la clase alerta, si esxite la eliminamos y si no la creamos, para que no se dupliquen
  function eliminarAlerta(referencia) {
    const existe = referencia.querySelector(".alerta");
    if (existe) {
      existe.remove();
    }
  }
  //ferificar el Email valido

  //avilitar boton
  function habilitarBtn() {
    if (Object.values(email).includes("")) {
      btnSubmit.disabled = true;
      btnSubmit.classList.add("opacity");
      return;
    }
    btnSubmit.disabled = false;
    btnSubmit.classList.remove("opacity");
  }
});
