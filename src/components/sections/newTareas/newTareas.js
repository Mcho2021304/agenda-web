import { TareasList } from "../tareas/dbTareas.js"; 

let FormularioTareas = () => {
    let form = document.createElement("form");
    form.className = "new-task-form";

    // Título del formulario
    let title = document.createElement("h2");
    title.textContent = "Nueva Tarea";
    form.appendChild(title);

    // Label y input para el título de la tarea
    let labelTitulo = document.createElement("label");
    labelTitulo.textContent = "Título: ";
    labelTitulo.htmlFor = "titulo";

    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.name = "titulo";
    inputTitulo.required = true;
    inputTitulo.placeholder = "Ingrese el título de la tarea";

    // Label y select para la prioridad
    let labelPrioridad = document.createElement("label");
    labelPrioridad.textContent = "Prioridad: ";
    labelPrioridad.htmlFor = "prioridad";

    let selectPrioridad = document.createElement("select");
    selectPrioridad.name = "prioridad";
    selectPrioridad.required = true;

    let opciones = ["Alta", "Media", "Baja"];
    opciones.forEach(op => {
        let option = document.createElement("option");
        option.value = op.toLowerCase(); // alta, media, baja
        option.textContent = op;
        selectPrioridad.appendChild(option);
    });

    // Botones
    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";

    let btnCancelar = document.createElement("button");
    btnCancelar.type = "button";
    btnCancelar.textContent = "Cancelar";

    // Agregar elementos al form
    form.appendChild(labelTitulo);
    form.appendChild(inputTitulo);
    form.appendChild(labelPrioridad);
    form.appendChild(selectPrioridad);
    form.appendChild(btnAgregar);
    form.appendChild(btnCancelar);

    // Evento submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let tarea = {
            titulo: inputTitulo.value,
            prioridad: selectPrioridad.value
        };

        console.log("Tarea a agregar:", tarea);

        TareasList.push(tarea); 
        console.log("Lista actual de tareas:", TareasList);

        form.reset(); 
    });

    // Cancelar resetea el formulario
    btnCancelar.addEventListener("click", () => {
        form.reset();
    });

    return form;
}

export { FormularioTareas };
