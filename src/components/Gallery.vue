<template>
  <div>
    <main>
      <h1>Recipes Book</h1>
      <Recipe
        class="recipe"
        v-for="(recipe, idx) in recipes"
        :key="idx"
        :name="recipe.name"
        :img="recipe.image"
        :description="recipe.description"
        :ingredients="recipe.ingredients"
      />
      <button id="addResipe">Add Ricipe</button>
    </main>
  </div>
</template>

<script>
import { db } from "../db";
import Recipe from "../components/Recipe.vue";

export default {
  data() {
    return {
      recipes: [],
    };
  },

  components: {
    Recipe,
  },
  firestore: {
    recipes: db.collection("recipes"),
  },
};
</script>


<style scoped>
#addResipe {
  max-width: 150px;
  padding: 10px 20px;
  background-color: #5cb85c;
  color: #fff;
  font-size: 15px;
  border: 1px solid #5cb85c;
  border-radius: 5px;
  cursor: pointer;
}

#addResipe:hover,
#addResipe:focus,
#addResipe:active {
  background-color: #0ae90a;
  border-color: #0ae90a;
}

main {
  display: flex;
  flex-direction: column;
}
</style>
