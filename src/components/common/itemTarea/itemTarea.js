import { TareasList } from "./../../sections/tareas/dbTareas.js"
import { saveTareasToStorage } from "../localStorage/Storage.js";

let ItemTarea = (imgTarea, estado, titulo, descripcion, prioridad) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    // Ícono de la tarea
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgTarea}`;
    etiquetaImg.alt = "Tarea";

    // Estado
    let etiquetaEstado = document.createElement("input")
    etiquetaEstado.type = "checkbox";
    etiquetaEstado.className = "tarea-estado"

    // Título de la tarea
    let etiquetaTitulo = document.createElement("p");
    etiquetaTitulo.textContent = titulo;
    etiquetaTitulo.className = "tarea-titulo";

    //Descripcion
    let etiquetaDescripcion = document.createElement("button");
    etiquetaDescripcion.textContent = "Descripcion";

    // Prioridad de la tarea
    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = prioridad;
    etiquetaPrioridad.className = "tarea-prioridad";

    let btnEditar = document.createElement("button");
    btnEditar.innerHTML = '<img src="./assets/icons/edit.svg" alt="Editar">';

    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = '<img src="./assets/icons/delete.svg" alt="Eliminar">';


    // Agregar elementos al div
    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaEstado);
    div.appendChild(etiquetaTitulo);
    div.appendChild(etiquetaDescripcion);
    div.appendChild(etiquetaPrioridad);
    div.appendChild(btnEditar);
    div.appendChild(btnEliminar);

    etiquetaDescripcion.addEventListener("click", () => {
        alert(`Descripcion: ${descripcion}`);
    });

    btnEditar.addEventListener("click", () => {
    const index = TareasList.findIndex(t => t.tarea === titulo);
    if (index === -1) return;

    const nuevoNombre = prompt("Editar nombre de la tarea:", TareasList[index].tarea);
    if (!nuevoNombre) return;

    const nuevaDesc = prompt("Editar descripción:", TareasList[index].descripcion);
    if (!nuevaDesc) return;

    TareasList[index].tarea = nuevoNombre;
    TareasList[index].descripcion = nuevaDesc;

    saveTareasToStorage(TareasList);

    etiquetaTitulo.textContent = nuevoNombre;

    titulo = nuevoNombre;
    descripcion = nuevaDesc;
    });

    btnEliminar.addEventListener("click", () => {
        const index = TareasList.findIndex(t => t.tarea === titulo);
        if (index === -1) return;

        const confirmar = confirm("¿Seguro que deseas eliminar esta tarea?");
        if (!confirmar) return;

        TareasList.splice(index, 1);
        saveTareasToStorage(TareasList);

        div.remove();
    });

    return div;

}

export { ItemTarea };
