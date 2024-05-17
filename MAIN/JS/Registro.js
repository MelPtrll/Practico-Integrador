
const modal =
document.querySelector("#modal");

const BtnAbrirModal = document.getElementById("btn-abrir-modal");
const BtnCerrarModal = document.getElementById("btn-cerrar-modal");
const dialog = document.getElementById("modal");
dialog.returnValue = "aceptar";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

BtnAbrirModal.addEventListener("click", () => {
    dialog.showModal();
    openCheck(dialog);
  });
  

  BtnCerrarModal.addEventListener("click", () => {
    dialog.close();
    openCheck(dialog);
  });