<template>
  <div class="popup">
    <div class="popup-body">
      <h3 class="name" v-if="editMode">{{ name }}</h3>
      <div class="form-group" v-else>
        <input
          class="form-control input-name"
          v-model="areaName"
          :placeholder="areaName"
        />
      </div>
      <figure class="figure">
        <img v-if="editMode" :src="img" />
        <div v-else class="form-group file">
          <p>Upload image</p>
          <input
            class="form-control file"
            type="file"
            placeholder="Recipe Image"
            accept="image/jpeg"
            @change="uploadImage"
            id="file"
          />
          <label for="file">
            <b-icon icon="box-arrow-down" font-scale="7"></b-icon>
          </label>
        </div>
        <figcaption class="description">
          <div class="buttons">
            <button
              class="btn btn-info edit"
              v-if="editMode"
              @click="editMode = false"
            >
              Edit
            </button>
            <button class="btn btn-success edit" v-else @click="saveEdited()">
              Save
            </button>
            <button class="btn btn-danger remove" @click="removeItem()">
              Remove
            </button>
          </div>
          <div class="description-body" ref="descriptionBody" v-if="editMode">
            {{ description }}
          </div>
          <div class="form-group" v-else>
            <textarea
              class="desctiptio-area form-control"
              v-model="areaDescription"
            ></textarea>
          </div>
        </figcaption>
      </figure>
      <Ingredient
        v-for="(ingredient, idx2) in ingredients"
        :key="idx2"
        :ingredient="ingredient"
        :index="idx2"
        :index2="id"
      />
      <button class="btn btn-primary plus" @click="plus()">+</button>
      <div v-if="vissible" class="form-item">
        <p class="error" v-if="error">Please, fill out all fields</p>
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
            placeholder="Ingredient Quantity"
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
import Ingredient from "../components/Ingredient.vue";
import { mapMutations } from "vuex";
export default {
  props: ["name", "img", "description", "ingredients", "idx"],
  data() {
    return {
      vissible: false,
      editMode: true,
      recipeName: "",
      recipeQuantaty: "",
      id: this.idx,
      areaDescription: this.description,
      areaName: this.name,
      error: false,
      image: this.img,
    };
  },
  components: {
    Ingredient,
  },
  computed: {
    isFilled() {
      return this.recipeName == "" || this.recipeQuantaty == "";
    },
  },
  methods: {
    ...mapMutations(["addIngredient", "removeItems", "editItem"]),
    plus() {
      this.vissible = !this.vissible;
    },
    close() {
      this.$emit("close");
    },
    removeItem() {
      this.removeItems(this.id);
      this.$emit("close");
    },
    saveEdited() {
      this.editItem({
        id: this.id,
        data: {
          description: this.areaDescription,
          name: this.areaName,
          image: this.image,
        },
      });
      this.editMode = !this.editMode;
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.image = e.target.result;
      };
    },
    sendData() {
      if (!this.isFilled) {
        this.addIngredient({
          id: this.id,
          data: {
            ingredientName: this.recipeName,
            ingredientValue: this.recipeQuantaty,
          },
        });
        this.vissible = this.error = false;
        this.recipeName = this.recipeQuantaty = "";
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

.form-group.file input {
  display: none;
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
  width: 100%;
}

.buttons {
  margin: 0 0 15px;
}

.remove {
  margin: 0 0 0 10px;
}

.desctiptio-area {
  width: 100%;
  min-height: 300px;
  resize: none;
}

.input-name {
  width: 97%;
}
</style>
