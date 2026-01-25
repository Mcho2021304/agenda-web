import { saveTareasToStorage } from "../../common/localStorage/Storage.js";
import { TareasList } from "../tareas/dbTareas.js";

const FormularioTareas = () => {
    const sectionFormulario = document.createElement("section");
    sectionFormulario.className = "formulario";

    const title = document.createElement("h2");
    title.textContent = "Nueva tarea";

    const form = document.createElement("form");
    form.classList.add("new-task-form");

    // ===== TÍTULO =====
    const labelTitulo = document.createElement("label");
    labelTitulo.textContent = "Título";
    const inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Ingrese el título de la tarea";
    inputTitulo.required = true;

    // ===== DESCRIPCIÓN =====
    const labelDescripcion = document.createElement("label");
    labelDescripcion.textContent = "Descripción";
    const textareaDescripcion = document.createElement("textarea");
    textareaDescripcion.placeholder = "Describe la tarea...";
    textareaDescripcion.required = true;

    // ===== PRIORIDAD =====
    const labelPrioridad = document.createElement("label");
    labelPrioridad.textContent = "Prioridad";
    const selectPrioridad = document.createElement("select");
    selectPrioridad.required = true;

    const optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.textContent = "Seleccione prioridad";
    optionDefault.disabled = true;
    optionDefault.selected = true;
    selectPrioridad.appendChild(optionDefault);

    ["Alta", "Media", "Baja"].forEach(prioridad => {
        const option = document.createElement("option");
        option.value = prioridad.toLowerCase();
        option.textContent = prioridad;
        selectPrioridad.appendChild(option);
    });

    // ===== BOTONES =====
    const btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Guardar";

    const btnCancelar = document.createElement("button");
    btnCancelar.type = "button";
    btnCancelar.textContent = "Cancelar";

    btnCancelar.addEventListener("click", () => form.reset());

    form.append(
        labelTitulo, inputTitulo,
        labelDescripcion, textareaDescripcion,
        labelPrioridad, selectPrioridad,
        btnAgregar, btnCancelar
    );

    sectionFormulario.append(title, form);

    // ===== SUBMIT =====
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const tarea = {
            titulo: inputTitulo.value.trim(),
            descripcion: textareaDescripcion.value.trim(),
            prioridad: selectPrioridad.value,
            estado: false
        };

        if (!tarea.titulo || !tarea.descripcion || !tarea.prioridad) return;

        TareasList.push(tarea);
        saveTareasToStorage(TareasList);

        form.reset();
    });

    return sectionFormulario;
};

export { FormularioTareas };
