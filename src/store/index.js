import Vue from "vue";
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
  },
  actions: {
    bindRecipes: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('recipes', db.collection('doc'))
    }),
  },
  mutations: vuexfireMutations,
  // {
  //   updateRecipes(state, recipes) {
  //     state.recipes = recipes;
  //   },
  //   addIngredient(state, { id, data }) {
  //     state.recipes[id].ingredients.push(data);
  //   },
  //   addRecipe(state, data) {
  //     state.recipes.push(data);
  //   },
  //   removeItems(state, id) {
  //     state.recipes.splice(id, 1);
  //   },
  //   removeIngredientItems(state, { id, id2 }) {
  //     state.recipes[id2].ingredients.splice(id, 1);
  //   },
  //   editItem(state, { id, data }) {
  //     state.recipes[id].description = data.description;
  //     state.recipes[id].name = data.name;
  //     state.recipes[id].image = data.image;
  //   },
  //   editMutation(state, { id, id2, data }) {
  //     state.recipes[id2].ingredients[id].ingredientName = data.ingredientName;
  //     state.recipes[id2].ingredients[id].ingredientValue = data.ingredientValue;
  //   },
  // },
  getters: {
    getRecipes(state) {
      return state.recipes;
    },
  },
});
