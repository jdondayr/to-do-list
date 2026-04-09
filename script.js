// Variables
let inputTarea = document.querySelector("#inputTarea");
let botonAñadir = document.querySelector("#botonAñadir");
let botonAñadirImportante = document.querySelector("#botonAñadirImportante");
let botonBorrarTodasTareas = document.querySelector("#botonBorrarTodasTareas");
let listaTareas = document.querySelector("#listaTareas");
let listaImportantes = document.querySelector("#listaImportantes");

// Eventos
botonAñadir.addEventListener("click", () => {
    if (inputTarea.value === "") return; // Comprueba que el input no esté vacío
    // Tarea nueva
    let tareaNueva = document.createElement("li");
    tareaNueva.textContent = inputTarea.value;
    inputTarea.value = ""; // Reinicia value del input
    let botonBorrarTarea = document.createElement("button");
    botonBorrarTarea.textContent = "X";

    // Marcar las tareas como completadas
    tareaNueva.addEventListener("click", () => {
        tareaNueva.classList.toggle("completadas");
    });

    // Borrar la tarea con el botón
    botonBorrarTarea.addEventListener("click", () => {
        listaTareas.removeChild(tareaNueva);
    })

    tareaNueva.appendChild(botonBorrarTarea);
    listaTareas.appendChild(tareaNueva);
});

botonAñadirImportante.addEventListener("click", () => {
    if (inputTarea.value === "") return; // Comprueba que el input no esté vacío
    // Tarea nueva
    let tareaNueva = document.createElement("li");
    tareaNueva.textContent = inputTarea.value;
    inputTarea.value = ""; // Reinicia value del input
    let botonBorrarTarea = document.createElement("button");
    botonBorrarTarea.textContent = "X";

    // Marcar las tareas como completadas
    tareaNueva.addEventListener("click", () => {
        tareaNueva.classList.toggle("completadas");
    });

    // Borrar la tarea con el botón
    botonBorrarTarea.addEventListener("click", () => {
        listaImportantes.removeChild(tareaNueva);
    })

    tareaNueva.appendChild(botonBorrarTarea);
    listaImportantes.appendChild(tareaNueva);
});

botonBorrarTodasTareas.addEventListener("click", () => {
    let itemsListaTareas = listaTareas.querySelectorAll("li");
    let itemsListaImportantes = listaImportantes.querySelectorAll("li");
    itemsListaTareas.forEach(item => item.remove());
    itemsListaImportantes.forEach(item => item.remove()); 
})