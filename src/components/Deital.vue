<template>
  <div class="popup">
    <div class="popup-body">
      <h2 class="name">{{ name }}</h2>
      <figure class="figure">
        <img :src="img" />
        <figcaption class="description">{{ description }}</figcaption>
      </figure>
      <section>
        <p
          class="ingredient"
          v-for="(ingredient, idx2) in ingredients"
          :key="idx2"
        >
          <b>{{ ingredient.ingredientName }}</b> :
          {{ ingredient.ingredientValue }}
        </p>
      </section>
      <button class="btn btn-primary plus" @click="plus()">+</button>
      <div v-if="vissible" class="form-item">
        <div class="form-group">
          <input
            class="form-control"
            placeholder="Ingredient Name"
            v-model="recipeName"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            placeholder="Ingredient Quantaty"
            v-model="recipeQuantaty"
          />
        </div>
        <button class="btn btn-primary" @click="sendData()">
          Add New Ingredient
        </button>
      </div>
      <button class="btn btn-primary close" @click="close()">×</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["name", "img", "description", "ingredients", "idx"],
  data() {
    return {
      vissible: false,
      recipeName: "",
      recipeQuantaty: "",
      id: this.idx,
    };
  },
  methods: {
    ...mapMutations(["addIngredient"]),
    plus() {
      this.vissible = !this.vissible;
    },
    close() {
      this.$emit("close");
    },
    sendData() {
      this.addIngredient({
        id: this.id,
        data: {
          ingredientName: this.recipeName,
          ingredientValue: this.recipeQuantaty,
        },
      });
      this.vissible = false;
      this.recipeName = this.recipeQuantaty = "";
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.plus {
  border-radius: 50%;
  padding: 0;
  width: 30px;
  height: 30px;
  margin: 10px 0;
}

.close {
  border-radius: 50%;
   width: 30px;
  height: 30px;
}

.name {
  margin: 0 0 20px 0;
}



.description {
  margin: 0 0 0 20px;
}
</style>
