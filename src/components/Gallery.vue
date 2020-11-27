<template>
  <div>
    <main>
      <h1>Recipes Book</h1>
      <Recipe
        class="recipe"
        v-for="(recipe, idx) in getRecipes"
        :key="idx"
        :name="recipe.name"
        :img="recipe.image"
        :description="recipe.description"
        :ingredients="recipe.ingredients"
        :idx="idx"
      />
      <button id="addResipe" @click="vissible = !vissible">Add Ricipe</button>
      <div v-if="vissible">
        <input v-model="name" />
        <input v-model="description" />
        <input type="file" accept="image/jpeg" @change="uploadImage" />
        <button @click="addRecipes()">Add</button>
      </div>
    </main>
  </div>
</template>

<script>
import Recipe from "../components/Recipe.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      vissible: false,
      name: "",
      image: null,
      description: "",
    };
  },
  computed: {
    ...mapGetters(["getRecipes"]),
  },
  components: {
    Recipe,
  },
  methods: {
    ...mapMutations(["addRecipe"]),
    addRecipes() {
      this.addRecipe({
        name: this.name,
        image: this.image,
        description: this.description,
        ingredients: [],
      });
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.image = e.target.result;
      };
    },
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
