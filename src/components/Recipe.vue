<template>
  <div class="article">
    <h2>{{ name }}</h2>
    <figure>
      <img :src="img" />
      <figcaption>{{ description }}</figcaption>
    </figure>
    <section v-for="(ingredient, idx2) in ingredients" :key="idx2">
      <p>{{ ingredient.name }}:{{ ingredient.quantity }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    };
  },
   props: ['name', 'img', "description", "ingredients"],
};
</script>


<style scoped>


h2 {
  margin: 0 0 20px 0;
}

.article {
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
</style>
