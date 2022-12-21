import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import { async } from 'regenerator-runtime';


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
if (module.hot) {
  module.hot.accept();
}

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
    recipeView.renderError();
  }
}

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search results
    await model.loadSearchResults(query);

    // render result
    resultsView.render(model.state.search.results);

  } catch (err) {
    console.log(err);
  }
};


const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();