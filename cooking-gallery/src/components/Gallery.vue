<template>
  <div>
    <main>
      <h1>Recipes Book</h1>
      <article v-for="(recipe, idx) in recipes" :key="idx">
        <h2>{{ recipe.name }}</h2>
        <figure>
          <img :src="recipe.image" />
          <figcaption>{{ recipe.description }}</figcaption>
        </figure>
        <section v-for="(ingredient, idx2) in recipe.ingredients" :key="idx2">
          <p>{{ingredient.name}}:{{ingredient.quantity}}</p>
        </section>
      </article>
      <button id="addResipe">Add Ricipe</button>
    </main>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  data() {
    return {
      recipes: [],
    };
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
  border:1px solid #5cb85c;
  border-radius: 5px;
  cursor: pointer;
}

#addResipe:hover,
#addResipe:focus,
#addResipe:active {
  background-color: #0ae90a;
  border: #0ae90a;
}

h2 {
  margin: 0 0 20px 0;
}

main {
  display: flex;
  flex-direction: column;
}

article {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 0 0 20px;
}

figure {
  display: flex;
  margin: 0;
}

figcaption {
  margin: 0 0 0 20px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
