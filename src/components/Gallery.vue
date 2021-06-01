<template>
  <div>
    <main>
      <h4>Recipe Book</h4>
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
      <button class="btn btn-primary" @click="vissible = !vissible">
        Add Ricipe
      </button>
      <div v-show="vissible" class="form-item">
        <p class="error" v-if="error">Please, fill out all fields</p>
        <div class="form-group">
          <input
            class="form-control"
            placeholder="Recipe Name"
            v-model="name"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            placeholder="Recipe Description"
            v-model="description"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control file"
            type="file"
            placeholder="Recipe Image"
            accept="image/jpeg"
            @change="uploadImage"
          />
        </div>
        <button class="btn btn-primary" @click="addRecipes()">
          Add New Recipe
        </button>
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
      image: null,
      name: "",
      description: "",
      error: false,
    };
  },
  components: {
    Recipe,
  },
  computed: {
    ...mapGetters(["getRecipes"]),
    isFilled() {
      return this.name == "" || this.description == "";
    },
  },
  methods: {
    ...mapMutations(["addRecipe"]),
    addRecipes() {
      if (!this.isFilled) {
        this.addRecipe({
          name: this.name,
          image: this.image,
          description: this.description,
          ingredients: [],
        });
        this.name = this.description = "";
        this.vissible = this.error = false;
      } else {
        this.error = true;
      }
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
.form-control.file {
  height: 45px;
}

.btn-primary {
  margin: 15px 0;
}
</style>
