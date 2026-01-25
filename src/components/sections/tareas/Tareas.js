import { ItemTarea } from "../../common/itemTarea/itemTarea.js";
import { TareasList } from "./dbTareas.js";

const Tareas = () => {
    const sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    const h2 = document.createElement("h2");
    h2.textContent = "Tareas";
    sectionTareas.appendChild(h2);

    TareasList.forEach((tarea) => {
        sectionTareas.appendChild(
            ItemTarea("task.svg", tarea.estado, tarea.titulo, tarea.descripcion, tarea.prioridad)
        );
    });

    return sectionTareas;
};

export { Tareas };
