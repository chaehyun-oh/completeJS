import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
  try {

    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    //  1. loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    //  2. rendering recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);



  } catch (err) {
    console.log(err)
  }
}
// controlRecipes();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}

init();