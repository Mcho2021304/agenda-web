import { saveContactsToStorage } from "../../common/localStorage/Storage.js";
import { ContactList } from "../contactos/db.js";

const Formulario = () => {
    const form = document.createElement("form");
    form.classList.add("new-contact-form");

    const title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";

    const labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre";

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Ingrese el nombre";
    inputNombre.required = true;

    const labelTelefono = document.createElement("label");
    labelTelefono.textContent = "Teléfono";

    const inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Ej: 12345678";
    inputTelefono.required = true;

    const btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";

    const btnCancelar = document.createElement("button");
    btnCancelar.type = "button";
    btnCancelar.textContent = "Cancelar";

    btnCancelar.addEventListener("click", () => {
        form.reset();
    });

    form.append(
        title,
        labelNombre,
        inputNombre,
        labelTelefono,
        inputTelefono,
        btnAgregar,
        btnCancelar
    );

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const contacto = {
            nombre: inputNombre.value.trim(),
            telefono: inputTelefono.value.trim()
        };

        if (!contacto.nombre || !contacto.telefono) return;

        ContactList.push(contacto);
        saveContactsToStorage(ContactList);

        form.reset();
    });

    return form;
};

export { Formulario };
