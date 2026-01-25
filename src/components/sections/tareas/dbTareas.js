import { getTareasFromStorage } from "../../common/localStorage/Storage.js";

let TareasList = getTareasFromStorage("lista_de_tareas") || [];

export { TareasList };
