<template>
  <div class="article" v-on:click="openPopUp()">
    <h2 class="name">{{ name }}</h2>
    <div class="group">
      <figure class="figure">
        <img :src="img" />
        <figcaption class="description">{{ description }}</figcaption>
      </figure>
      <transition name="fade">
        <Deital
          v-if="visible"
          :name="name"
          :img="img"
          :description="description"
          :ingredients="ingredients"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Deital from "../components/Deital.vue";
export default {
  data() {
    return {
      visible: false,
    };
  },
  components: {
    Deital,
  },
  methods: {
    openPopUp: function () {
      this.visible = !this.visible;
    },
  },
  props: ["name", "img", "description", "ingredients"],
};
</script>


<style scoped>
.group {
  display: flex;
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
