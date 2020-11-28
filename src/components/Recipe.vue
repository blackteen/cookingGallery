<template>
  <div class="article" v-on:click.self="visible = true">
    <h2 class="name">{{ name }}</h2>
    <div class="group">
      <figure class="figure">
        <img :src="img" />
        <figcaption class="description">{{ shortDescripton }}</figcaption>
      </figure>
      <transition name="fade">
        <Popup
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
import Popup from "../components/Popup.vue";

export default {
  props: ["name", "img", "description", "ingredients", "idx"],
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    shortDescripton() {
      let desr = this.description;
      let trimmedString = desr.substring(0, 170);
      return `${trimmedString}...`;
    },
  },
  components: {
    Popup,
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
  background: #f1f1f1;
}

.name {
  margin: 0 0 20px 0;
}

.description {
  margin: 0 0 0 20px;
}
</style>
