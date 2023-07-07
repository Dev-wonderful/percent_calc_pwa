<template>
  <section class="container">
    <div>
      <h2>Insert the number to check</h2>
      <input type="text" />
    </div>
    <div>
      <h2>Insert the main number</h2>
      <input type="text" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PercentCalc",
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
section.container {
  background-color: aliceblue;
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
}
section.container div {
  background-color: aqua;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
}
input {
  height: 30px;
  width: 50%;
  padding-inline-start: 10px;
  font-size: 20px;
  border-radius: 4px;
}
</style>
