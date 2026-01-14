import { Contactos } from "../../sections/contactos/Contactos";
import { NewContactForm } from "../../sections/newContactForm/NewContactForm";

let container = document.getElementById("container");
let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewContact = function () {
    container.innerHTML = "";
    container.appendChild(NewContactForm());

}

export { viewContacts, viewContact}