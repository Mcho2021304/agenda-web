import { ItemTarea } from "../../common/itemTarea/itemTarea.js";
import { TareasList } from "./dbTareas.js";

let Tareas = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";
    sectionTareas.appendChild(h2);

    TareasList.forEach((tarea) => {
        sectionTareas.appendChild(
            ItemTarea("task.svg", tarea.titulo, tarea.prioridad)
        );
    });

    return sectionTareas;
}

export { Tareas };
