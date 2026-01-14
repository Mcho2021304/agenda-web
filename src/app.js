import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";

//App
let app = document.getElementById("app");
 
//section menu
let nav = document.getElementById("nav");
 
//Agregar Botones
nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "user.svg",
    function () {
        container.innerHTML = "",
        container.appendChild(Contactos());
    }
));
nav.appendChild(Button("Crear Contacto", "plus", "add.svg"));
nav.appendChild(Button("ToDoList", "todoList", "list.svg"));
nav.appendChild(Button("Crear Tarea", "crearTarea", "add.svg"))
 
//section container
let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());
 
 