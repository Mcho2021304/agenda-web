import { viewContacts } from "./../../layout/nav/NavControlers.js";

let DatailContact = (contactData) => {
    // Crear overlay
    const overlay = document.createElement("div");
    overlay.className = "overlay-detailContact";

    // Crear card
    const card = document.createElement("div");
    card.className = "detailCard";

    // Botón Regresar
    const btnRegresar = document.createElement("button");
    btnRegresar.textContent = " <= Regresar";
    btnRegresar.className = "btn-regresarContact";
    btnRegresar.addEventListener("click", () => {
        viewContacts(); // vuelve a la lista de contactos
    });

    // Título
    const h2 = document.createElement("h2");
    h2.textContent = "Detalles del Contacto";

    // Imagen / Avatar
    const imagenC = document.createElement("img");
    imagenC.src = `./assets/icons/${contactData.imgContacto || 'user.svg'}`;
    imagenC.alt = contactData.nombre || "Avatar del contacto";
    imagenC.className = "imagen-contactos";

    // Nombre del contacto
    const nombre = document.createElement("h3");
    nombre.textContent = contactData.nombre || "Sin Nombre";
    nombre.className = "nombre-contacto";

    // Contenedor info
    const info = document.createElement("div");
    info.className = "info-detalle";

    const telefono = document.createElement("p");
    telefono.innerHTML = `<span>Teléfono:</span> ${contactData.telefono || 'No registrado'}`;

    info.appendChild(nombre);
    info.appendChild(telefono);

    // Agregar elementos a la card
    card.appendChild(h2);
    card.appendChild(imagenC);
    card.appendChild(info);
    card.appendChild(btnRegresar);

    // Agregar card al overlay
    overlay.appendChild(card);

    return overlay;
}

export { DatailContact };
