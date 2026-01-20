let ItemTarea = (imgTarea, titulo, prioridad) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    // Ícono de la tarea
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgTarea}`;
    etiquetaImg.alt = "Tarea";

    // Título de la tarea
    let etiquetaTitulo = document.createElement("p");
    etiquetaTitulo.textContent = titulo;
    etiquetaTitulo.className = "tarea-titulo";

    // Prioridad de la tarea
    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = prioridad;
    etiquetaPrioridad.className = "tarea-prioridad";

    // Agregar elementos al div
    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaTitulo);
    div.appendChild(etiquetaPrioridad);

    return div;
}

export { ItemTarea };
