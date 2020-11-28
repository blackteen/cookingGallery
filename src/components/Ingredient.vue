<template>
  <div :data-index="index">
    <p>
      <b v-if="editMode">{{ ingredient.ingredientName }}</b>
      <input
        v-else
        v-model="ingredientEditionName"
        :placeholder="ingredientEditionName"
      />
      :
      <span v-if="editMode">{{ ingredient.ingredientValue }}</span>
      <input
        v-else
        v-model="ingredientEditionValue"
        :placeholder="ingredientEditionValue"
      />
      <button v-if="editMode" @click="editMode = !editMode">Edit</button>
      <button v-else @click="editIngredient()">Save</button>
      <button>Delete</button>
    </p>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["ingredient", "index","index2"],
  data() {
    return {
      editMode: true,
      id: this.index,
      id2: this.index2,
      ingredientEditionName: this.ingredient.ingredientName,
      ingredientEditionValue: this.ingredient.ingredientValue,
    };
  },
  methods: {
    ...mapMutations(["editMutation"]),
    editIngredient() {
      this.editMutation({
        id: this.id,
        id2: this.id2,
        data: {
          ingredientName: this.ingredientEditionName,
          ingredientValue: this.ingredientEditionValue,
        },
      });
      this.editMode = !this.editMode;
    },
  },
};
</script>