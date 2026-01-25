import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "./db.js";

let Contactos = () => {
    const sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    const h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    // Pasar un objeto completo a ItemContacto
    ContactList.forEach((contact) => {
        sectionContactos.appendChild(
            ItemContacto({
                imgContacto: "user.svg",
                nombre: contact.nombre,
                telefono: contact.telefono
            })
        );
    });

    return sectionContactos;
};

export { Contactos };
