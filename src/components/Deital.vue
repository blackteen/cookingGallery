<template>
  <div class="popup">
    <div class="popup-body">
      <h2 class="name">{{ name }}</h2>
      <figure class="figure">
        <img :src="img" />
        <figcaption class="description">{{ description }}</figcaption>
      </figure>
      <section
        class="ingredient"
        v-for="(ingredient, idx2) in ingredients"
        :key="idx2"
      >
        <p>{{ ingredient.ingredientName }}:{{ ingredient.ingredientValue }}</p>
      </section>
      <button class="btn btn-primary plus" @click="plus()">+</button>
      <div v-if="vissible" class="form-item">
        <div class="form-group">
          <input class="form-control" placeholder="Ingredient Name" v-model="recipeName" />
        </div>
        <div class="form-group">
          <input class="form-control" placeholder="Ingredient Quantaty" v-model="recipeQuantaty" />
        </div>
        <button class="btn btn-primary" @click="sendData()">Add New Ingredient</button>
      </div>
      <button class="btn btn-primary close" @click="close()">x</button>
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
      this.recipeName = this.recipeQuantaty = "";
    },
  },
};
</script>

<style scoped>

.form-item {
  padding: 20px;
  border: 1px solid #ccc;
}

.popup {
  pointer-events: all;
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
}
.popup {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.popup-body {
  position: absolute;
  width: 80vw;
  background: #fff;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
}

.name {
  margin: 0 0 20px 0;
}

.figure {
  display: flex;
  margin: 0;
}

.description {
  margin: 0 0 0 20px;
}


h3 {
  margin: 40px 0 0;
}
</style>
