import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
 
let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";
 
    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);
 
    sectionContactos.appendChild(ItemContacto("user.svg", "Marcos Danilo", "4544644"));
    sectionContactos.appendChild(ItemContacto("user.svg", "Sebastian Cho", "4454542"));
    sectionContactos.appendChild(ItemContacto("user.svg", "Jack Fallas", "9887553"));
 
    return sectionContactos;
}
 
export { Contactos };
 