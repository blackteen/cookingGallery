<template>
  <div class="article" v-on:click.self="visible = true">
    <h2 class="name">{{ name }}</h2>
    <div class="group">
      <figure class="figure">
        <img :src="img" />
        <figcaption class="description">{{ description }}</figcaption>
      </figure>
      <transition name="fade">
        <Deital
          v-on:close="visible = !visible"
          v-if="visible"
          :name="name"
          :img="img"
          :description="description"
          :ingredients="ingredients"
          :idx="idx"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Deital from "../components/Deital.vue";

export default {
  props: ["name", "img", "description", "ingredients", "idx"],
  data() {
    return {
      visible: false,
    };
  },
  components: {
    Deital,
  },
};
</script>


<style scoped>
.group {
  display: flex;
}
.group,
.name {
  pointer-events: none;
}

.article {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 0 0 20px;
}

.name {
  margin: 0 0 20px 0;
}

.figure {
  display: flex;
  margin: 0;
  align-items: center;
}

.description {
  margin: 0 0 0 20px;
}

h3 {
  margin: 40px 0 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
