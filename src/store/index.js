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
      state.recipes[id].image = data.image;
    },
    editMutation(state, { id, id2, data }) {
      state.recipes[id2].ingredients[id].ingredientName = data.ingredientName;
      state.recipes[id2].ingredients[id].ingredientValue = data.ingredientValue;
    },
  },
  state: {
    recipes: [
      {
        name: "Landsknechts",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/72/Landsknechte.jpg",
        description:
          "The Landsknechte (also rendered as Landsknechts; singular: Landsknecht, pronounced [ˈlantsknɛçt]) were German-speaking mercenaries used in pike and shot formations during the early modern period. Consisting predominantly of pikemen and supporting foot soldiers, their front line was formed by Doppelsöldner ('double-pay men') renowned for their use of crossbow, arquebus and Zweihänder. They formed the bulk of the Holy Roman Empire's Imperial Army from the late 1400s to the early 1600s.",
        ingredients: [
          {
            ingredientName: "Pike",
            ingredientValue: "100",
          },
          {
            ingredientName: "Flamber",
            ingredientValue: "200",
          },
        ],
      },
      {
        name: "Landsknecht Musketeers",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Landsknecht_2.JPG",
        description:
          "The Landsknechte (also rendered as Landsknechts; singular: Landsknecht, pronounced [ˈlantsknɛçt]) were German-speaking mercenaries used in pike and shot formations during the early modern period. Consisting predominantly of pikemen and supporting foot soldiers, their front line was formed by Doppelsöldner ('double-pay men') renowned for their use of crossbow, arquebus and Zweihänder. They formed the bulk of the Holy Roman Empire's Imperial Army from the late 1400s to the early 1600s.",
        ingredients: [
          {
            ingredientName: "Musket",
            ingredientValue: "300",
          },
          {
            ingredientName: "Flamber",
            ingredientValue: "200",
          },
        ],
      },
      {
        name: "Reiters",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b7/Micha%C5%82owski_Reiter.jpg",
        description:
          "Reiter or Schwarze Reiter ('black riders', anglicized swart reiters) were a type of cavalry in 16th to 17th century Central Europe including Holy Roman Empire, Polish–Lithuanian Commonwealth, Tsardom of Russia, and others.[1]",
        ingredients: [
          {
            ingredientName: "Pistol",
            ingredientValue: "400",
          },
          {
            ingredientName: "Sword",
            ingredientValue: "300",
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
