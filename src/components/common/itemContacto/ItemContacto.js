import { viewDetailContact } from "../../layout/nav/NavControlers.js";

let ItemContacto = (contactData) => {
    // Contenedor principal del contacto
    const div = document.createElement("div");
    div.className = "item-contacto";

    // Icono del contacto
    const img = document.createElement("img");
    img.src = `./assets/icons/${contactData.imgContacto || 'user.svg'}`;
    img.alt = contactData.nombre;
    img.className = "contacto-icono";
    img.style.borderRadius = "50%";

    // Información del contacto
    const infoDiv = document.createElement("div");
    infoDiv.className = "contacto-info";

    const nombre = document.createElement("p");
    nombre.textContent = contactData.nombre;
    nombre.className = "contacto-nombre";

    const telefono = document.createElement("p");
    telefono.textContent = contactData.telefono;
    telefono.className = "contacto-telefono";

    infoDiv.appendChild(nombre);
    infoDiv.appendChild(telefono);

    // Botón ver detalle
    const btnDetalle = document.createElement("button");
    btnDetalle.textContent = "Ver";
    btnDetalle.className = "btn-ver-contacto";

    // Click en todo el item abre la card modal
    div.addEventListener("click", () => {
        viewDetailContact(contactData);
    });

    div.appendChild(img);
    div.appendChild(infoDiv);
    div.appendChild(btnDetalle);

    return div;
};

export { ItemContacto };
