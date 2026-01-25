import { Contactos } from "../../sections/contactos/Contactos.js";
import { Tareas } from "../../sections/tareas/Tareas.js";
import { Formulario } from "../../sections/newContactForm/NewContactForm.js";
import { FormularioTareas } from "../../sections/newTareas/newTareas.js";
import { DatailContact } from "../../sections/detailContact/detailContact.js";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
};

let viewTareas = function () {
    container.innerHTML = "";
    container.appendChild(Tareas());
};

let viewnewContact = function () {
    container.innerHTML = "";
    container.appendChild(Formulario());
};

let TareasList = function () {
    container.innerHTML = "";
    container.appendChild(FormularioTareas());
};

// NUEVO: overlay modal para el detalle
let viewDetailContact = function(contactData) {
    const overlay = document.createElement("div");
    overlay.className = "overlay-detailContact";

    const detailCard = DatailContact(contactData);
    detailCard.classList.add("detailCard");

    overlay.appendChild(detailCard);
    document.body.appendChild(overlay);

    const btnRegresar = detailCard.querySelector(".btn-regresarContact");
    btnRegresar.addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
    });
};

export { viewContacts, viewnewContact, TareasList, viewTareas, viewDetailContact };
