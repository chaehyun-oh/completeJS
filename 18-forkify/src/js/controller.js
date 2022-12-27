import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

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

    //  0. Update results view to mark selected search result
    resultsView.update(model.getSearchResultPage());

    //  1. Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    //  2. loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    //  3. rendering recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);

  } catch (err) {
    recipeView.renderError();
    console.error(err);
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
    resultsView.render(model.getSearchResultPage());

    // render initial pagination buttons
    paginationView.render(model.state.search);


  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // render new result
  resultsView.render(model.getSearchResultPage(goToPage));

  // render new pagination buttons
  paginationView.render(model.state.search);

};

const controlServings = function (newServings) {
  //  Update the recipe servings  (in state)
  model.updateServings(newServings);

  //  Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);

};

const controlAddBookmark = function () {
  //  1. Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //  2. Update recipe view
  recipeView.update(model.state.recipe);

  //  3. Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = function (newRecipe) {
  console.log(newRecipe);
  // upload new recipe data
}

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addhandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();