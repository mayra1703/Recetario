
import { forkiSearch } from "./forkiFecht.js";

async function mostrarReceta() {
    const recetas = document.getElementById('Recetas');
    recetas.innerHTML = ""
    recetas.style.display = "flex";
    recetas.style.flexDirection = "column";

    const busqueda = document.getElementById("busqueda").value
    const recipes = await callRecipes(busqueda);
    recipes.data.recipes.map(receta => {
    console.log(receta.title);

    const recipesName = document.createElement('p');
    recipesName.textContent = receta.title;

    const imgRecipes = document.createElement('img');
    imgRecipes.src = receta.image_url;
    imgRecipes.alt = receta.name;
    imgRecipes.style.width = "50px";
    

    const publisher = document.createElement('p');
    publisher.textContent = recipes.publisher;
    
    recetas.append(publisher);
    recetas.append(imgRecipes);
    recetas.append(recipesName);
})
}

async function callRecipes(data) {
    return await forkiSearch(data.toLowerCase());
}

const form = document.getElementById("form")
const buscar = document.createElement('input');
buscar.id = "busqueda";
buscar.style.width = "200px";
const boton = document.createElement('button');
boton.textContent = "Buscar Recetas";
boton.onclick = mostrarReceta;

form.append(buscar);
form.append(boton);
//////////////
/*'use strict';
import { forkiSearch } from "./forkiFecht.js";

const input = document.querySelector("input");
const button = document.querySelector("button");
const recipeContainer = document.querySelector(".recetario-cards");

button.addEventListener("click", (e)=> {
    e.preventDefault();
    mostrarReceta(input.value);
});

async function mostrarReceta(recipes){
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipes}`)
    .then((result) => result.json())
    .then((data) => {
        informacionReceta(data);
    }).catch((err) => {
        console.log(err);
    });
}

function informacionReceta(recipes){
    const name = document.createElement('p');
    name.textContent = recipes.title;

    const imgRecipes = document.createElement('img');
        imgRecipes.src = recipes.image_url;
        imgRecipes.alt = recipes.name;
        imgRecipes.style.width = "50px";

    const publisher = document.createElement('p');
        publisher.textContent = recipes.publisher;

        const div = document.createElement("div");
        div.style.textAlign = "center";
        div.appendChild(name);
        div.appendChild(imgRecipes);
        div.appendChild(publisher);
    recipeContainer.appendChild(div);
}
mostrarReceta();
*/