import { Contactos } from "../../sections/contactos/Contactos.js";
import { Tareas } from "../../sections/tareas/Tareas.js";
import { Formulario } from "../../sections/newContactForm/NewContactForm.js";
import { FormularioTareas } from "../../sections/newTareas/newTareas.js";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewTareas = function (){
    container.innerHTML = "";
    container.appendChild(Tareas());
}

let viewnewContact = function () {
    container.innerHTML = "";
    container.appendChild(Formulario());

}

let TareasList = function () {
    container.innerHTML = "";
    container.appendChild(FormularioTareas());

}


export { viewContacts, viewnewContact, TareasList, viewTareas}