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
  inputNombre.addEventListener("input", validar);
  inputApellido.addEventListener("input", validar);
  inputemail.addEventListener("input", validar);
  inputTelefono.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);
  btnSubmit.addEventListener("click", enviarEmail);
  //validar campos
});
