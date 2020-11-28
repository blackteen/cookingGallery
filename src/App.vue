<template>
  <div id="app" class="container">
    <Gallery />
  </div>
</template>

<script>
import Gallery from "./components/Gallery.vue";

export default {
  name: "App",
  components: {
    Gallery,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

h3 {
  margin: 40px 0 0;
}

main {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

main .figure {
  display: flex;
  margin: 0;
  align-items: flex-start;
}

.popup {
  pointer-events: all;
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

.close {
  position: absolute;
  right: 10px;
  top: 10px;
}

.form-item {
  padding: 20px;
  border: 1px solid #ccc;
}

.figure img {
  max-width: 100%;
  height: auto;
  width: 50%;
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
