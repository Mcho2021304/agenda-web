import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { viewContacts, viewnewContact, TareasList } from "./components/layout/nav/NavControlers.js";


//App
let app = document.getElementById("app");
 
//section menu
let nav = document.getElementById("nav");
 
//Agregar Botones
nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "user.svg",
    viewContacts
));

nav.appendChild(Button("Crear Contacto", 
    "plus", 
    "add.svg",
    viewnewContact
));

nav.appendChild(Button("ToDoList", 
    "todoList", 
    "list.svg"
));

nav.appendChild(Button("Crear Tarea", 
    "crearTarea", 
    "add.svg",
    TareasList
));
 
//section container
let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);
    } catch (error) {
        console.log(error);
    }  
}

tareas();

console.log("Completado");
 
 