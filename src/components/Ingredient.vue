<template>
  <div>
    <p>
      <b v-if="editMode">{{ ingredient.ingredientName }}</b>
      <span v-else class="form-group">
        <input
          class="form-control"
          v-model="ingredientEditionName"
          :placeholder="ingredientEditionName"
        />
      </span>
       : 
      <span v-if="editMode">{{ ingredient.ingredientValue }}</span>
      <span v-else>
        <input
          class="form-control"
          v-model="ingredientEditionValue"
          :placeholder="ingredientEditionValue"
        />
      </span>
      <span v-if="editMode" class="icon"
        ><b-icon
          icon="pencil-fill"
          font-scale="1.25"
          @click="editMode = !editMode"
        ></b-icon
      ></span>
      <span v-else class="icon"
        ><b-icon
          icon="check-square-fill"
          font-scale="1.25"
          @click="editIngredient()"
        ></b-icon
      ></span>
      <span class="icon"
        ><b-icon
          icon="trash"
          font-scale="1.25"
          @click="removeIngredientItem()"
        ></b-icon
      ></span>
    </p>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["ingredient", "index", "index2"],
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
    ...mapMutations(["editMutation", "removeIngredientItems"]),
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
    removeIngredientItem() {
      this.removeIngredientItems({
        id: this.id,
        id2: this.id2,
      });
    },
  },
};
</script>

<style scoped>
.icon {
  cursor: pointer;
  margin: 0 0 0 10px;
}
p {
  display: flex;
  align-items: baseline;
  align-content: center;
  margin: 0;
}
</style>