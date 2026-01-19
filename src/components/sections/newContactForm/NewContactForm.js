import { Contactos } from "../contactos/db.js";
function ContactList(fuction){
    
    let form = document.createElement("form");
    form.className = "new-contact-form";

    let title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";
    form.appendChild(title);

    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre: ";
    labelNombre.htmlFor = "nombre";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.name = "nombre";
    inputNombre.required = true;
    inputNombre.placeholder = "Ingrese el nombre";

    let labelTelefono = document.createElement("label");
    labelTelefono.textContent = "Telfono: ";
    labelTelefono.htmlFor = "Telefono";

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.name = "telefono";
    inputTelefono.required = true;
    inputTelefono.placeholder = "Ej: 12346689";

    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit"
    btnAgregar.textContent = "Agregar";

    let btnCancelar = document.createElement("button");
    btnCancelar.type = "button"
    btnCancelar.textContent = "Cancelar";

    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelTelefono);
    form.appendChild(inputTelefono);
    form.appendChild(btnAgregar);
    form.appendChild(btnCancelar);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let contacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };
        console.log (ContactList);
        console.log(contacto);
        ContactList.push(contacto);
        console.log (ContactList);
    });
 
    return sectionNuevoContacto;

}

 
export { NuevoContacto };
 
 