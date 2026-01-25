import { TareasList } from "../../sections/tareas/dbTareas.js";
import { saveTareasToStorage } from "../../common/localStorage/Storage.js";

const ItemTarea = (imgTarea = "default.svg", estado, titulo, descripcion, prioridad) => {
    const div = document.createElement("div");
    div.className = "item-tarea";

    const etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgTarea}`;
    etiquetaImg.alt = "Tarea";
    etiquetaImg.className = "tarea-icono";

    const etiquetaEstado = document.createElement("input");
    etiquetaEstado.type = "checkbox";
    etiquetaEstado.checked = estado;
    etiquetaEstado.className = "tarea-estado";

    const etiquetaTitulo = document.createElement("p");
    etiquetaTitulo.textContent = titulo;
    etiquetaTitulo.className = "tarea-titulo";

    const btnDescripcion = document.createElement("button");
    btnDescripcion.type = "button";
    btnDescripcion.textContent = "Descripción";
    btnDescripcion.className = "tarea-descripcion";

    const etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = prioridad;
    etiquetaPrioridad.className = "tarea-prioridad";

    const btnEditar = document.createElement("button");
    btnEditar.type = "button";
    btnEditar.innerHTML = '<img src="./assets/icons/edit.svg" alt="Editar">';
    btnEditar.className = "btn-editar";

    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.innerHTML = '<img src="./assets/icons/delete.svg" alt="Eliminar">';
    btnEliminar.className = "btn-eliminar";

    div.append(etiquetaImg, etiquetaEstado, etiquetaTitulo, btnDescripcion, etiquetaPrioridad, btnEditar, btnEliminar);

    // ===== EVENTOS =====
    btnDescripcion.addEventListener("click", () => alert(`Descripción: ${descripcion}`));

    etiquetaEstado.addEventListener("change", () => {
        const index = TareasList.findIndex(t => t.titulo === titulo);
        if (index > -1) {
            TareasList[index].estado = etiquetaEstado.checked;
            saveTareasToStorage(TareasList);
        }
    });

    btnEditar.addEventListener("click", () => {
        const index = TareasList.findIndex(t => t.titulo === titulo);
        if (index === -1) return;

        const nuevoTitulo = prompt("Editar nombre de la tarea:", TareasList[index].titulo);
        const nuevaDescripcion = prompt("Editar descripción:", TareasList[index].descripcion);
        if (!nuevoTitulo || !nuevaDescripcion) return;

        TareasList[index].titulo = nuevoTitulo;
        TareasList[index].descripcion = nuevaDescripcion;
        saveTareasToStorage(TareasList);

        etiquetaTitulo.textContent = nuevoTitulo;
        titulo = nuevoTitulo;
        descripcion = nuevaDescripcion;
    });

    btnEliminar.addEventListener("click", () => {
        const index = TareasList.findIndex(t => t.titulo === titulo);
        if (index === -1) return;

        if (!confirm("¿Seguro que deseas eliminar esta tarea?")) return;

        TareasList.splice(index, 1);
        saveTareasToStorage(TareasList);
        div.remove();
    });

    return div;
};

export { ItemTarea };
