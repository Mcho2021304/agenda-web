const LOCAL_STORAGE_KEY_CONTACTS = 'agenda_telefonica';
const LOCAL_STORAGE_KEY_TASKS = 'lista_de_tareas';

function saveContactsToStorage(contactos){
    localStorage.setItem(LOCAL_STORAGE_KEY_CONTACTS,JSON.stringify(contactos));
}

function saveTareasToStorage(tareas){
    localStorage.setItem(LOCAL_STORAGE_KEY_TASKS,JSON.stringify(tareas));
}

function getContactsFromStorage(){
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CONTACTS)) || [];
}

function getTareasFromStorage(){
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TASKS)) || [];
}

export {LOCAL_STORAGE_KEY_CONTACTS, LOCAL_STORAGE_KEY_TASKS, getContactsFromStorage, saveContactsToStorage, getTareasFromStorage, saveTareasToStorage}


    
