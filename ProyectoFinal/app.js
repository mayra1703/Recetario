'use strict';
import { forkiSearch } from "./forkiFecht.js";

async function mostrarReceta() {
    
    const recetas = document.getElementById('recetario-cards');
    const busqueda = document.getElementById("busqueda").value
    const recipes = await callRecipes(busqueda);
    recipes.data.recipes.map(receta => {
    console.log(receta.title);
    
    const recipesName = document.createElement('p');
    recipesName.textContent = receta.title;

    const imgRecipes = document.createElement('img');
    imgRecipes.src = receta.image_url;
    imgRecipes.alt = receta.name;
    imgRecipes.style.width = "90px";
    
    recetas.append(imgRecipes);
    recetas.append(recipesName);

})

}

async function limpiarCampo(){
    buscar.value = "";
    recetas.remove();
}

async function callRecipes(data) {
    return await forkiSearch(data.toLowerCase());
}

const buscador = document.getElementById('buscador');
const buscar = document.createElement('input');
buscar.id = "busqueda";
buscar.style.width = "200px";
const boton = document.createElement('button');
boton.textContent = "Buscar Recetas";
boton.onclick = mostrarReceta;
const limpiar = document.createElement('button');
limpiar.textContent = "Limpiar";
limpiar.onclick = limpiarCampo;

buscador.append(buscar);
buscador.append(boton);
buscador.append(limpiar);
