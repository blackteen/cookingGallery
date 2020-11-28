import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  mutations: {
    updateRecipes(state, recipes) {
      state.recipes = recipes;
    },
    addIngredient(state, { id, data }) {
      state.recipes[id].ingredients.push(data);
    },
    addRecipe(state, data) {
      state.recipes.push(data);
    },
    removeItems(state, id) {
      state.recipes.splice(id, 1);
    },
    removeIngredientItems(state, { id, id2 }) {
      state.recipes[id2].ingredients.splice(id, 1);
    },
    editItem(state, { id, data }) {
      state.recipes[id].description = data.description;
      state.recipes[id].name = data.name;
    },
    editMutation(state, { id, id2, data }) {
      state.recipes[id2].ingredients[id].ingredientName = data.ingredientName;
      state.recipes[id2].ingredients[id].ingredientValue = data.ingredientValue;
    },
  },
  state: {
    recipes: [
      {
        name: "Pork",
        image:
          "https://image.shutterstock.com/image-photo/grilled-beef-steaks-spices-on-600w-439021402.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ingredients: [
          {
            ingredientName: "Salt",
            ingredientValue: "20mg",
          },
          {
            ingredientName: "Pork",
            ingredientValue: "1 piece",
          },
        ],
      },
      {
        name: "Beef",
        image:
          "https://image.shutterstock.com/image-photo/tender-boneless-grilled-pork-chops-600w-1277299174.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ingredients: [
          {
            ingredientName: "Salt",
            ingredientValue: "10mg",
          },
          {
            ingredientName: "Beef",
            ingredientValue: "1 piece",
          },
        ],
      },
      {
        name: "Chicken",
        image:
          "https://image.shutterstock.com/image-photo/roasted-chicken-rosemary-served-on-600w-1023252025.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ingredients: [
          {
            ingredientName: "Salt",
            ingredientValue: "15mg",
          },
          {
            ingredientName: "Chicken",
            ingredientValue: "1 piece",
          },
        ],
      },
    ],
  },
  getters: {
    getRecipes(state) {
      return state.recipes;
    },
  },
});
