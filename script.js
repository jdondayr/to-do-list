// Variables
let inputTarea = document.querySelector("#inputTarea");
let botonAñadir = document.querySelector("#botonAñadir");
let botonAñadirImportante = document.querySelector("#botonAñadirImportante");
let botonBorrarTodasTareas = document.querySelector("#botonBorrarTodasTareas");
let listaTareas = document.querySelector("#listaTareas");
let listaImportantes = document.querySelector("#listaImportantes");
let tareasTotales = document.querySelector("#tareasTotales");
let tareasCompletadas = document.querySelector("#tareasCompletadas");
let contadorTareasTotales = document.querySelector("#contadorTareasTotales");
let contadorTareasCompletadas = document.querySelector("#contadorTareasCompletadas");

// Eventos
botonAñadir.addEventListener("click", () => {
    if (inputTarea.value === "") return; // Comprueba que el input no esté vacío
    // Tarea nueva
    let tareaNueva = document.createElement("li");
    tareaNueva.textContent = inputTarea.value;
    inputTarea.value = ""; // Reinicia value del input
    let botonBorrarTarea = document.createElement("button");
    botonBorrarTarea.textContent = "X";
    botonBorrarTarea.id = "botonBorrarTarea";

    // Marcar las tareas como completadas
    tareaNueva.addEventListener("click", () => {
        tareaNueva.classList.toggle("completadas");
        if (tareaNueva.classList.contains("completadas")) Number(contadorTareasCompletadas.textContent++);
        else contadorTareasCompletadas.textContent--;
    });

    // Borrar la tarea con el botón
    botonBorrarTarea.addEventListener("click", () => {
        listaTareas.removeChild(tareaNueva);
        Number(contadorTareasTotales.textContent--);
    })

    tareaNueva.appendChild(botonBorrarTarea);
    listaTareas.appendChild(tareaNueva);
    Number(contadorTareasTotales.textContent++);
});

botonAñadirImportante.addEventListener("click", () => {
    if (inputTarea.value === "") return; // Comprueba que el input no esté vacío
    // Tarea nueva
    let tareaNueva = document.createElement("li");
    tareaNueva.textContent = inputTarea.value;
    inputTarea.value = ""; // Reinicia value del input
    let botonBorrarTarea = document.createElement("button");
    botonBorrarTarea.textContent = "X";
    botonBorrarTarea.id = "botonBorrarTarea";

    // Marcar las tareas como completadas
    tareaNueva.addEventListener("click", () => {
        tareaNueva.classList.toggle("completadas");
        if (tareaNueva.classList.contains("completadas")) Number(contadorTareasCompletadas.textContent++);
        else contadorTareasCompletadas.textContent--;
    });

    // Borrar la tarea con el botón
    botonBorrarTarea.addEventListener("click", () => {
        listaImportantes.removeChild(tareaNueva);
        Number(contadorTareasTotales.textContent--);
    })

    tareaNueva.appendChild(botonBorrarTarea);
    listaImportantes.appendChild(tareaNueva);
    Number(contadorTareasTotales.textContent++);
});

botonBorrarTodasTareas.addEventListener("click", () => {
    let itemsListaTareas = listaTareas.querySelectorAll("li");
    let itemsListaImportantes = listaImportantes.querySelectorAll("li");
    itemsListaTareas.forEach(item => item.remove());
    itemsListaImportantes.forEach(item => item.remove());
    Number(contadorTareasTotales.textContent = 0);
    Number(contadorTareasCompletadas.textContent = 0);
})