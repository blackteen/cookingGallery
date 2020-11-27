import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {

    },
    mutations: {
        updateRecipes(state, recipes) {
            state.recipes = recipes
        },
        creteaIngredient(state, { id, data }) {
            state.recipes[id].ingredients.push(data)
        }
    },
    state: {
        recipes: [
            {
                name: "Pork",
                image: "https://image.shutterstock.com/image-photo/grilled-beef-steaks-spices-on-600w-439021402.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                ingredients: [{
                    ingredientName: "Salt",
                    ingredientValue: "10mg"
                }]
            },
            {
                name: "Beef",
                image: "https://image.shutterstock.com/image-photo/grilled-beef-steaks-spices-on-600w-439021402.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                ingredients: [{
                    ingredientName: "Salt",
                    ingredientValue: "10mg"
                }]
            },
            {
                name: "Vhiken",
                image: "https://image.shutterstock.com/image-photo/grilled-beef-steaks-spices-on-600w-439021402.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                ingredients: [{
                    ingredientName: "Salt",
                    ingredientValue: "10mg"
                }]
            }
        ],
    },
    getters: {
        getRecipes(state) {
            return state.recipes
        }
    }
})