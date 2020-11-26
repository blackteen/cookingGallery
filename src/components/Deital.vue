<template>
  <div>
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
      <p>{{ ingredient.name }}:{{ ingredient.quantity }}</p>
    </section>
    <button class="plus" @click="plus()">+</button>
    <div v-if="vissible">
      <input v-model="recipeName">
      <input v-model="recipeQuantaty">
      <button @click="sendData()">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vissible: false,
      recipeName: "",
      recipeQuantaty:"",
    };
  },
  methods: {
    plus(){
      this.vissible = !this.vissible
    },
    sendData() {
      this.$emit("inputs-change", 
        [
          this.recipeName,
          this.recipeQuantaty
        ]
    );
    },
  },
  props: ["name", "img", "description", "ingredients"],
};
</script>


<style scoped>
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
