function SweetRellenarDatos() {
  Swal.fire({
    title: "Favor de llenar todos los datos",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#bd9423",
  });
}

function SweetPrueba() {
  Swal.fire({
    title: "en teoria todo va bien",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#bd9423",
  });
}

function SweetErrorDatos() {
  Swal.fire({
    icon: "error",
    title: "Error al ingresar los datos",
    text: "Las credenciales son incorrectas. ",
    confirmButtonText: "Regresar",
    confirmButtonColor: "#F48484",
  });
}

function SweetSalirSesion() {
  Swal.fire({
    icon: "warning",
    title: "Cerrar Sesión",
    text: "¿Estas seguro que quieres cerrar tu sesión?",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#b81008",
    denyButtonText: "Regresar",
    denyButtonColor: "#bd9423",
  });
}
